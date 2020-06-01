import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './wrapper/message/message.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { StateService } from '../services/state.service';
import { SocketService } from '../services/socket.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';

/* Third Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [MessageComponent, WrapperComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [StateService, SocketService, ChatService],
  exports: [
    WrapperComponent
  ]
})
export class ChatModule { }
