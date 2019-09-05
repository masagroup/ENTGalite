from simulation_client import websocket_server
import argparse

if __name__ == '__main__':
    import sys
    parser = argparse.ArgumentParser()
    parser.add_argument('--running', type=argparse.FileType('r'))
    args, left = parser.parse_known_args()
    sys.argv = sys.argv[:1]+left
    if not args.running:
       raise argparse.ArgumentTypeError("Missing option running file")
    running =  args.running.read()
    websocket_server.start_app(running)
