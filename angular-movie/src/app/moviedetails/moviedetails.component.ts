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
  movieDetail!: MovieDetail;
  id!: number;
  movieCasts?: {
    name?: string;
    profile_path?: null | string;
    cast_id?: number;
  }[];
  genres: string | undefined = '';
  constructor(private route: ActivatedRoute, private dataservice: MovieDataService, private eRef: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit(): void {
    const container = this.eRef.nativeElement.querySelector('.container');
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.data.subscribe((data) => {
      this.movieDetail = data['detailObject'][0];
      this.genres = this.movieDetail.genres?.reduce((acc: any, cur, i, arr) => {
        if (i === arr.length - 1) {
          return acc + cur.name;
        } else {
          return acc + cur.name + ', ';
        }
      }, '');

      this.movieDetail.backdrop_path = this.dataservice.img_url + this.movieDetail.backdrop_path;
      this.renderer.setStyle(container, 'background-image', 'url(' + this.movieDetail.backdrop_path + ')');

      this.movieCasts = data['detailObject'][1].cast?.map((e: { cast_id: any; name: any; profile_path: string; }) => {
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
