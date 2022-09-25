import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _uIdSource = new Subject<string>();
  uId$ = this._uIdSource.asObservable();

  constructor() { }

  sendUId(uId:string) {
    this._uIdSource.next(uId);
  }
}
