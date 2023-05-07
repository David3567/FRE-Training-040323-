import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-notflix';
  movieData: any;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=72c578daa554cf85908fc4c8e4cd8c7f'
    ).subscribe((response) => {
      console.log(response)
    })
  }
}
