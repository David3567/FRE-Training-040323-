import { Component } from '@angular/core';
import { ApiService } from '../../core/service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/localStorage';
import { concatMap, range } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  id: any;
  baseUrl = "https://image.tmdb.org/t/p/original";
  tempUrl = "https://image.tmdb.org/t/p/w200";
  movieList: any;
  page = 1;
  username = this.storage.getItem("signup-username");
  isAdmin = this.storage.getItem("signup-role");

  constructor(
    private service: ApiService,
    private router: Router,
    private storage: LocalStorageService,
  ) { }

  onScroll() {
    this.service.getData(++this.page).subscribe(res => {
      let newList: any = res;
      newList = newList.results;
      newList.forEach((ele: any) => {
        ele.poster_path = this.tempUrl + ele.poster_path;
      })
      this.movieList = [...this.movieList, ...newList];
    });
  }

  onSubmit(movieId: number) {
    this.id = movieId.toString();
    this.service.setId(movieId.toString());
    this.storage.setItem("page", this.page.toString());
    const savedPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.storage.setItem("windowPos", savedPos.toString());
    this.router.navigate(['/movie-details']);
  }

  signOut() {
    this.storage.setItem('signup-username', "");
    this.storage.setItem('signup-email', "");
    this.storage.setItem('signup-role', "");
    this.storage.setItem('signup-tmdb', "");
    this.username = "";
    this.router.navigate(['/homepage']);
  }

  ngOnInit() {
    let pageNum = parseInt(this.storage.getItem('page'));
    if (pageNum == null) {
      pageNum = 1;
    }
    range(1, pageNum + 1).pipe(concatMap(i => this.service.getData(i))).subscribe((res) => {
      let newList: any = res;
      newList = newList.results;
      newList.forEach((ele: any) => {
        ele.poster_path = this.tempUrl + ele.poster_path;
      });
      this.movieList = [...this.movieList, ...newList];
    });

    //const tokenDecode = jwt_decode(this.storage.getItem("userInfo"));

    this.service.getData(this.page).subscribe(res => {
      this.movieList = res;
      this.movieList = this.movieList.results;
      this.movieList.forEach((ele: any) => {
        ele.poster_path = this.tempUrl + ele.poster_path;
      })
    })

    setTimeout(() => this.scrollFunction(), 800);
  }

  scrollFunction() {
    const savedPos = parseInt(this.storage.getItem("windowPos") || '0');
    window.scrollTo({
      top: savedPos,
      left: 0,
      behavior: 'smooth'
    });
  }
}
