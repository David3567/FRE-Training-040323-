import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../shared/service/moviedata/movie-data.service';
import { MovieDetail } from '../core/model/MovieDetail';
import { Credits } from '../core/model/Credits';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movieDetail?: MovieDetail;
  id!: number;
  movieCasts?: {
    name?: string;
    profile_path?: null | string;
    cast_id?: number; }[];
  genres: string | undefined = '';
  constructor(private route: ActivatedRoute, private dataservice: MovieDataService, private eRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(): void {
    const container = this.eRef.nativeElement.querySelector('.container');
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(this.id)) {
      console.log('Invalid movie id');
    } else {
      this.dataservice.fetchMovieDetail(this.id).subscribe((res) => {
        this.movieDetail = res
        this.genres = res.genres?.reduce((acc, cur, i, arr) => {
          if (i === arr.length - 1) {
            return acc + cur.name;
          } else {
            return acc + cur.name + ', ';
          }
        }, '');

        this.movieDetail.backdrop_path = this.dataservice.img_url + this.movieDetail.backdrop_path;
        this.renderer.setStyle(container, 'background-image', 'url(' + this.movieDetail.backdrop_path + ')');

      }

      )

      this.dataservice.fetchMovieCredit(this.id).subscribe((res) => {
        this.movieCasts = res.cast?.map((e) => {
          return {
            cast_id: e.cast_id,
            name: e.name,
            profile_path: e.profile_path ? this.dataservice.img_url + e.profile_path : null
          }
        }
        )
      })
    }


  }

}
