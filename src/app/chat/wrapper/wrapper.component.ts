import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { ChatService } from '../chat.service';
import { Message } from '../message';
import { SocketService } from 'src/app/services/socket.service';

import { faPenNib, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, AfterViewChecked, OnChanges {

  @Input() id: string;
  @ViewChild('scrollMe', {static: false})  myScrollContainer: ElementRef;

  theme: any;
  message: Message = new Message('');
  userColor;
  faPenNib = faPenNib;
  faPaperPlane = faPaperPlane;

  constructor(
    private socketService: SocketService,
    private stateService: StateService,
    public chatService: ChatService) { }



  ngOnInit() {
    this.stateService.state.subscribe(state => this.userColor = state.userColor);
    this.chatService.conversationId = this.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch ( err ) {
    }
  }

  keypressedHandler(e) {
    const keyCode = e.keyCode;
    const keyId = e.keyIdentifier;
    if (keyCode === 13) {
      this.sendMessage(this.message);
    }
  }

  sendStringMessage(message: string) {
    console.log(message);
    this.sendMessage(new Message(message));
  }

  sendMessage(message: Message) {
    this.chatService.sendMessage(JSON.parse(JSON.stringify(message)));
    this.message = new Message('');
  }

}
