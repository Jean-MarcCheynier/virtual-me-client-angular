/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

/* Third Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Mine */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { StateService } from './services/state.service';
import { DiaryComponent } from './components/diary/diary/diary.component';
import { CardComponent } from './components/diary/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

registerLocaleData(localeFr, 'fr-FR');


@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    CardComponent,
    AboutComponent,
    ArrowComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChatModule,
    HttpClientModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
