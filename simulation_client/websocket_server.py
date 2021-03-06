
"""Main Python application file for the EEL-CRA demo."""

import os
import sys
import platform
import random
import threading
import asyncio
import eel
import json


import pysw
import eel
from pprint import pprint
# alias pour raccourcir l'ecriture
P = pysw.client_protocols

WALKS = None


def send_train_to_interface(train: str):
    """Send Time to interface in order to synchronize simulation and interface"""
    eel.update_train_js(train)


def send_time_to_interface(date: str):
    """Send Time to interface in order to synchronize simulation and interface"""
    eel.update_sim_time_js(date)


@eel.expose
def receive_walks_from_py() -> str:
    """Send walks json to interface """
    print(WALKS[0:100])
    return WALKS


class TrainProtocol(P.SWLoginP, P.TickPrinterMixin, P.UnitMixin):
    """
    Offre juste les services utiles pour récupérer les informations
    sur les trains. Ce n'est pas nécessairement utile mais ça
    peut être pllus clair ensuite.
    """

    def is_train(self, unit):
        return isinstance(
            unit, self.bdd.pawns.TRAIN_Tgv) or isinstance(
            unit, self.bdd.pawns.TRAIN_Diesel)

    def OnReceived_ControlSendCurrentStateBegin(self, msg):
        self.bdd = self.factory.physical_base

    def OnReceived_ControlSendCurrentStateEnd(self, msg):
        super().OnReceived_ControlSendCurrentStateEnd(msg)
        U = self.units_by_id
        self.trains_by_id_sim = dict([(i, U[i]) for i in U
                                      if self.is_train(U[i])])

    def OnReceived_UnitCreation(self, msg):
        super().OnReceived_UnitCreation(msg)
        u = self.units_by_id[msg.unit.id]
        if not self.is_train(u):
            return
        self.OnCreate_train(u)

    def OnReceived_UnitAttributes(self, msg):
        super().OnReceived_UnitAttributes(msg)
        u = self.units_by_id[msg.unit.id]
        if not self.is_train(u):
            return
        self.OnUpdate_train(u)

    def OnReceived_UnitDestruction(self, msg):
        u = self.units_by_id[msg.unit.id]
        super().OnReceived_UnitDestruction(msg)
        if not self.is_train(u):
            return
        self.OnDelete_train(u)

    def OnCreate_train(self, created_train):
        pass

    def OnUpdate_train(self, updated_train):
        pass

    def OnDelete_train(self, deleted_train):
        pass


class TestProtocol(TrainProtocol):

    def OnReceived_ControlBeginTick(self, msg):
        send_time_to_interface(msg.date_time.data)

    def OnReceived_ControlEndTick(self, msg):
        pass
        super().OnReceived_ControlEndTick(msg)
        print("heure SIM: {0}".format(self.SIM_datetime))

    def OnUpdate_train(self, train):
        lat, lon = train.position

        send_train_to_interface(
            ' '.join([train.name, str(train.speed), str(lat), str(lon)]))
        print("Train '%s': vitesse = %f, pos = (%f,%f)" % (
            train.name, train.speed, lat, lon))


class TestFactory(P.SWFactory):
    protocol = TestProtocol

    def __init__(self, phybdd, login):
        super().__init__(phybdd, login, protocol=TestProtocol)


def start_connection(config):
    asyncio.set_event_loop(asyncio.new_event_loop())
    config.data_set = "SNCF"
    pysw.physical.install_importer(config)
    import sncf
    F = TestFactory(sncf, config.login)
    pysw.app.connect(config, sim_factory=F, timeline_factory=None)


def start_app(walks):
    """Start Eel with either production or development configuration."""
    global WALKS
    WALKS = walks
    args = pysw.config.cmd_line_options("--dev",
                                        help="???",
                                        dest="dev", type=bool,
                                        default=False,
                                        const=True, nargs='?'
                                        )
    conf = pysw.config.create_config_from_cmd_args(args)

    if args.dev:
        directory = './interface/src'
        app = None
        page = {'port': 4200}
    else:
        directory = './interface/dist/'
        app = 'chrome-app'
        page = 'index.html'
    eel.init(directory, ['.js', '.ts', '.html'])

    eel_kwargs = dict(
        host='localhost',
        port=8000,
        size=(1280, 800),
    )
    t = threading.Thread(target=start_connection, args=[conf])
    t.daemon = False
    t.start()
    try:
        eel.start(page, mode=app, **eel_kwargs)
    except EnvironmentError:
        # If Chrome isn't found, fallback to Microsoft Edge on Win10 or greater
        if sys.platform in [
                'win32', 'win64'] and int(
                platform.release()) >= 10:
            eel.start(page, mode='edge', **eel_kwargs)
        else:
            raise
    t.join()
