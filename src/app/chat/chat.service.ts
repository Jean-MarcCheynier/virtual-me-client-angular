import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable()
export class ChatService {

  private static URL_SEND_MESSAGE = '/api/v2/sap/dialog';
  private privateMessageList: any[] = [];
  private id: string;
  private pending = false;

  set conversationId(conversationId: string){
    this.id = conversationId;
  }

  get messageList() {
    return this.privateMessageList;
  }

  get isWriting() {
    return this.pending;
  }

  constructor(private http: HttpClient) {
    const defaultMessage = new Message('Moi je suis une version virtuelle de \"lui\". Parle-moi s\'il te plait!', 'placeholder');
    defaultMessage.from = 'bot';
    this.privateMessageList.push(defaultMessage);
   }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sendMessage = (message: Message): Observable<any> => {
    this.pending = true;
    const obs = this.http.post(`${ChatService.URL_SEND_MESSAGE}/conversation/${this.id}`, message);
    this.privateMessageList.push(message);

    obs.subscribe(async (data: any[]) => {
      for (const messageI of data) {
        await this.sleep(1500);
        this.privateMessageList.push(messageI);
      }
      this.pending = false;
    });
    return obs;
  }
}
