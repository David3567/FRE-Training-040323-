import { HostListener, Injectable } from '@angular/core';

@Injectable()
export class RestorescrollService {

  constructor() {
  }


  savePosition(position: number) {
    console.log('Saving scroll position:', position);
    history.replaceState({ scrollPosition: position,}, '');
  }

  restorePosition(){
    if (history.state && history.state.scrollPosition) {
      return history.state.scrollPosition;
    }
  }

}
