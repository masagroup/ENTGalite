# encoding utf-8

import pysw
# alias pour raccourcir l'ecriture 
P = pysw.client_protocols

# le protocol d'accès à  la simulation utilise twisted. Il est donc basé sur
# les mêmes principes à savoir: une classe 'protocol' et une classe 'factory'
# Depuis l'apparition du module standad asyncio, j'ai l'intention de supprimer
# twisted. J'ai déjà commencé mais le module (client_protocols2) n'est pas
# encore prêt

# on limite l'usage de tous les protocle de pysw pour ne pas gréver les
# perf (au cas ou). Pysw à été utilisé au départ pour faire des tests de
# performance sur site de la simulation. Il peut (doit) être efficace,
# contrairement à protobuf pour python de google qui ne l'est pas.
class TrainProtocol(P.SWLoginP, P.TickPrinterMixin, P.UnitMixin):
    """
    Offre juste les services utiles pour récupérer les informations
    sur les trains. Ce n'est pas nécessairement utile mais ça
    peut être pllus clair ensuite.
    """

    def is_train(self, unit):
        return isinstance(unit, self.bdd.pawns.TRAIN_Tgv)

    def OnReceived_ControlSendCurrentStateBegin(self, msg):
        self.bdd = self.factory.physical_base        
    
    def OnReceived_ControlSendCurrentStateEnd(self, msg):
        super().OnReceived_ControlSendCurrentStateEnd(msg)
        U = self.units_by_id
        self.trains_by_id_sim = dict([(i,U[i]) for i in U \
                                      if self.is_train(U[i]) ])

    def OnReceived_UnitCreation(self, msg):
        super().OnReceived_UnitCreation(msg)
        u = self.units_by_id[msg.unit.id]
        if not self.is_train(u): return
        self.OnCreate_train(u)

    def OnReceived_UnitAttributes(self, msg):
        super().OnReceived_UnitAttributes(msg)
        u = self.units_by_id[msg.unit.id]
        if not self.is_train(u): return
        self.OnUpdate_train(u)

    def OnReceived_UnitDestruction(self, msg):
        u = self.units_by_id[msg.unit.id]
        super().OnReceived_UnitDestruction(msg)
        if not self.is_train(u): return
        self.OnDelete_train(u)

    def OnCreate_train(self, created_train):
        # to be defined in sub classes if needed
        pass
    def OnUpdate_train(self, updated_train):
        # to be defined in sub classes if needed
        pass
    def OnDelete_train(self, deleted_train):
        # to be defined in sub classes if needed
        pass
    
# Idée de classe pour implémenter le mapping des données venant de la simulation
class TestProtocol(TrainProtocol):

    # Appelé chaque tick de la simulation
    # on a ainsi l'heure courante
    def OnReceived_ControlEndTick(self, msg):
        super().OnReceived_ControlEndTick(msg)
        H = self.SIM_datetime.strftime("%H:%M:%S")
        print("heure SIM: %s, nb trains: %d" % (H, len(self.trains_by_id_sim)))
            
    def OnUpdate_train(self, train):
        # le train est ici une instance d'une class de type
        # sncf.pawns.TRAIN_Tgv spécifique à la bdd de la SNCF
        # Cette classe est une metaclass de pysw.meta.Pwan et
        # hérite de pysw.mata.Unit
        print("Train '%s': vitesse = %f" % (train.name, train.speed))
        
# la factory qui est en charge d'instancier le protocol
# lors de la connexion à la simulation
class TestFactory(P.SWFactory):
    protocol = TestProtocol
    def __init__(self, phybdd, login):
        super().__init__(phybdd, login, protocol=TestProtocol)


# un exemple
if __name__ == '__main__':
    conf = pysw.config.default

    # pour une connexion à distance, sinon la config par défaut
    #pysw.config.default.root_dir = r"xxx" # On verra ensemble
    # en externe (hors masa): "46.218.153.46"
    # en interne (dans masa): "172.19.2.91"
    # default = localhost    
    conf.server_name_or_ip = "172.19.2.91" 

    conf.port_sim = 16276 # cf. admin pour session "test ENTGalite"
    #conf.port_timeline = 16279 # port_sim + 3

    # la base de donnée contenue dans l'otpak est accessible
    # comme un module python
    conf.data_set = "SNCF"
    pysw.physical.install_importer(conf)
    import sncf

    # le login sans mot de passe
    F = TestFactory(sncf, "admin")
    # on se connecte dans une boucle sans fin à la simulation
    # la timeline_factory sert à démarrer la connexion
    # sur le serveur du chronogramme. On n'en a pas besoin ici
    pysw.app.connect(sim_factory=F, timeline_factory=None)
