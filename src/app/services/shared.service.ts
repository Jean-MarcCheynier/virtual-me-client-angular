import { Injectable } from '@angular/core';
import * as uuidv1 from 'uuid/v1';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private static _id: string = uuidv1();

  get id(){
    return SharedService._id;
  }

  constructor() { }


}
