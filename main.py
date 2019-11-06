from simulation_client import websocket_server
import argparse

if __name__ == '__main__':
    import sys
    parser = argparse.ArgumentParser()
    parser.add_argument('--running', type=argparse.FileType('r'))
    parser.add_argument('--manchettes', type=argparse.FileType('r'))
    args, left = parser.parse_known_args()
    sys.argv = sys.argv[:1] + left
    if not args.running:
        raise argparse.ArgumentTypeError("Missing option running file")
    if not args.manchettes:
        raise argparse.ArgumentTypeError("Missing option manchettes file")
    running = args.running.read()
    manchettes = args.manchettes.read()
    websocket_server.start_app(running, manchettes)
