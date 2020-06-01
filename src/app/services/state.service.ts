import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StateService {

  private _state = new BehaviorSubject({
    name: 'initial',
    userColor: 'default',
    theme: 'default',
    layout: 'default',
    slideIn: true,
    history: []
  });

  get state(): Observable<any> {
    return this._state.asObservable();
  }

  constructor() { }

  notifyObservers(state: any): void {
    this._state.next(state);
  }

  changeState(key: string, value: any, author?: string): void {
    const next = this._state.value;
    next.history.push({
      key,
      old: next[key],
      new: value,
      author
    });
    next[key] = value;
    this.notifyObservers(next);
  }
}
