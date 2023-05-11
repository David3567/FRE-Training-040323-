import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() BackButton: boolean = false;
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
