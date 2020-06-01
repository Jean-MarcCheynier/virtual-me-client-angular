import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

  @Input() animation: any;
  @Output() animationEnded = new EventEmitter<string>();

  faArrowDown = faArrowDown;
  constructor() { }

  onAnimationend(e) {
    this.animationEnded.emit(this.animation);
  }

  ngOnInit() {

  }

}
