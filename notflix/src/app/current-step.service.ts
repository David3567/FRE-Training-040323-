import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentStepService {

  constructor() { }
  private currentStepSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  getCurrentStep() {
    return this.currentStepSubject.asObservable()
  }

  setCurrentStep(step: number) {
    this.currentStepSubject.next(step);
  }
}
