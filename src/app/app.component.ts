import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { SharedService } from './services/shared.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  LAYOUT_CLASS = '';
  title = 'my-app';
  theme: any;
  slideIn = false;
  twoPane = false;
  displayChat = false;
  displayDiary = false;
  product = {};

  constructor(
    public location: Location,
    public stateService: StateService,
    public sharedService: SharedService,
    private router: Router) {
      // decide what to do when this event is triggered.
      router.events.subscribe(val => {
            this.displayChat = !['', '/ui/welcome'].includes(location.path());
            this.displayDiary = !['', '/ui/welcome'].includes(location.path());
      });
    }

  ngOnInit(): void {
    //Observe the value state.theme
    this.stateService.state.subscribe(state => {
      this.theme = state.theme;
      this.layout = state.layout;
      this.slideIn = state.slideIn;
    });


  }

  set layout(layout: string) {
    switch(layout) {
      case 'twoPanes' :
        this.LAYOUT_CLASS = 'col-sm-12';
        break;
      default :
        this.LAYOUT_CLASS = 'col-sm-12';
        break;
    }
  }

  toggleSlide(): void{
    this.stateService.changeState('slideIn', !this.slideIn);
  }


}
