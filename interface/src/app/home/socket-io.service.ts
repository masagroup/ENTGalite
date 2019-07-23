import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { sword } from '@app/../../protobuff/compiled';

@Injectable()
export class SocketIoService {
  socket = io.connect({ host: '46.218.153.46', port: '16276' });

  constructor() {
    //sword.C;
    let loginRequest = sword.ClientToAuthentication.create({
      message: { authenticationRequest: { login: 'admin', password: '', version: { value: '0.52' } } }
    });
    /* 
    const loginRequest = sword.ClientToAuthentication.fromObject({
      login: 'admin',
      password: '',
      version: { value: '0.52' }
    }); */
    console.log(loginRequest);
    const encoded = sword.ClientToAuthentication.encode(loginRequest);
    console.log(encoded)
    this.socket.emit('login', encoded);
    // @ts-ignore
    const onevent = this.socket.onevent;
    // @ts-ignore
    this.socket.onevent = function(packet: any) {
      const args = packet.data || [];
      onevent.call(this, packet); // original call
      packet.data = ['*'].concat(args);
      onevent.call(this, packet); // additional call to catch-all
    };
    console.log('aa');
    this.socket.on('connection', (socket: any) => {
      console.log(socket);
    });
    this.socket.on('*', (event: any, msg: any) => {
      console.log(event);
      console.log(msg);
    });
  }
}
