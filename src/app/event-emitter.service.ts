import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeStatus = new EventEmitter();    
  subsVar: Subscription;    
  
  constructor() { }    
    
  onFirstComponentButtonClick() {    
    this.invokeStatus.emit();    
  } 
}
