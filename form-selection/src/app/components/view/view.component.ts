import { Component, OnInit } from '@angular/core';
import { SelectedItemsService } from 'src/app/selected-items.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{
  selectedItems: string[] = []

  constructor(private selectedItemsService: SelectedItemsService) {

  }

  ngOnInit(): void {
    this.selectedItems = this.selectedItemsService.selectedItems
  }
}
