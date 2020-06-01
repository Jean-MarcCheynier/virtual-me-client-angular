import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() bgColor: string;
  @Output() postBackEvent = new EventEmitter<string>();
  hidden = false;


  constructor() { }

  ngOnInit() {
  }

  postBack (message: string){
    this.hidden = false;
    this.postBackEvent.emit(message);
  };

}
