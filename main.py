from simulation_client import websocket_server
import argparse

if __name__ == '__main__':
    import sys
    parser = argparse.ArgumentParser()
    parser.add_argument('--walks', type=argparse.FileType('r'))
    args, left = parser.parse_known_args()
    sys.argv = sys.argv[:1]+left
    walks =  args.walks.read()
    print(walks[0:100])
    websocket_server.start_app(walks)
