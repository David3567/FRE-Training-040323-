import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Card } from '../interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listData : any[] = [];
  selectedEachList: any;
  storeName : string = '';
  storeDescription: string = '';

  onEachListClick(event: any, data : Card) {
    if (this.selectedEachList) {
      this.selectedEachList.style.backgroundColor = '';
      this.selectedEachList.querySelector('.color-bar').style.width = '';
    }
    const eachList = event.currentTarget;
    eachList.style.backgroundColor = 'lightgrey';
    eachList.querySelector('.color-bar').style.width = '15px';
    this.selectedEachList = eachList;
    this.storeName = data.name;
    this.storeDescription = data.description
  }
}
