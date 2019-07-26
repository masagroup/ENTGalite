from simulation_client import websocket_server
from simulation_client import simulation_protocole

if __name__ == '__main__':
    import sys
    websocket_server.start_app(develop=len(sys.argv) == 2)
    simulation_protocole.start_connection()