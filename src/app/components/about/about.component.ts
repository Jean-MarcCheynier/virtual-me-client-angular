import { Component, OnInit,  HostBinding } from '@angular/core';
import { faScroll, faDice, faBabyCarriage, faUserGraduate, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-about',
  animations: [
    trigger('openClose', [
      state('visible', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('2s')
      ]),
      transition('hidden => visible', [
        animate('2s')
      ]),
    ]),
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  faScroll = faScroll;
  faDice = faDice;
  faBabyCarriage = faBabyCarriage;
  faUserGraduate = faUserGraduate;
  faBuilding = faBuilding;

  open = false;

  steps = {
    step1 : {
      animate : false,
      complete : false,
      next : 'step2'
    },
    step2 : {
      animate : false,
      complete : false,
      next : 'step3'
    },
    step3 : {
      animate : false,
      complete : false,
      next : 'step4'
    },
    step4 : {
      animate : false,
      complete : false,
      next : 'step5'
    },
    step5 : {
      animate : false,
      complete : false,
      next : null
    }
  };

  onAnimationEnded(animation) {
    animation.complete = true;
    if (this.steps[animation.next]) {
      this.steps[animation.next].animate = true;
    }
  }

  constructor() { }

  ngOnInit() {
    this.steps.step1.animate = true;
  }

}
