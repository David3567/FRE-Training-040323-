import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() userHeader?: string;
  constructor(private localStorageService: LocalStorageService) {}

  user!: string;

  ngOnInit() {
    const token = this.localStorageService.getToken() || '';
    if (token) {
      const decoded: any = jwt_decode(token);
      this.user = decoded.username;
    }
    // console.log(this.user);
  }

  logout() {
    this.localStorageService.deleteToken();
  }
}
