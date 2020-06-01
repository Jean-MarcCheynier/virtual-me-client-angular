import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, of } from 'rxjs';
import { StateService } from './state.service';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class SocketService {


  stompClient: any;
  connected = false;
  id: string;

  init(): void {
    this.connect();
  }

  constructor(
    private stateService: StateService,
    private sharedService: SharedService,
    private router: Router) {
    this.id = this.sharedService.id;
    this.init();
  }

  connect = () => {
      const socket = new SockJS('/socket/gs-guide-websocket');
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, (frame) => {
          this.connected = true;
          console.log('Connected: ' + frame);
          this.stompClient.subscribe('/topic/greetings', (greeting) => {
              console.log(greeting);
          });

          this.stompClient.subscribe(`/action/private/${this.id}`, (data) => {
            const action = JSON.parse(data.body);
            switch (action.actionCode) {
              case 'changeUserColor':
                this.stateService.changeState('userColor', action.content);
                break;
              case 'openPage' :
                // If localpage
                if (action.content.startsWith('/')) {
                  this.router.navigate([action.content]);
                  this.stateService.changeState('slideIn', true);
                  this.stateService.changeState('layout', 'twoPanes');
                } else {
                  setTimeout(() => {
                    window.open(action.content, '_blank');
                    return false;
                  }, 6500);

                }

                break;
            }
        });
      });
  }

  disconnect = () => {
      if (this.stompClient !== null) {
          this.stompClient.disconnect();
      }
      this.connected = false;
      console.log('Disconnected');
  }

  sendName = () => {
      this.stompClient.send('/app/hello', {}, JSON.stringify({name: 'test'}));
  }
}
