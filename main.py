from simulation_client import websocket_server

if __name__ == '__main__':
    import sys
    websocket_server.start_app(develop=len(sys.argv) == 2)