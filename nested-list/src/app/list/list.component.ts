import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../menu-data.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  menuData: Menu[];

  constructor(private menuDataService: MenuDataService) {

  }

  ngOnInit(): void {
    this.menuData = this.menuDataService.menu;
  }

  
}
