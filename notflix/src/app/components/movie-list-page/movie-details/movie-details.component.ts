import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/movieData.service';
import { forkJoin } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from 'src/app/video-modal/video-modal.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  movieData: any;

  movieImages:  any;

  releaseYear: string

  movieActors: any;

  movieVideos: any;

  openVideoModal() {
    console.log('clicked')
    const movieVideo = this.movieVideos
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '100vw', // Set the desired width for the modal
      height: '50vh', // Set the desired height for the modal,
      data: movieVideo,
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result when the modal is closed
      console.log('Modal closed:', result);
    });
  }

  constructor(private movieDataService: MovieDataService, private route: ActivatedRoute, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)

    const movieData$ = this.movieDataService.getMovieData(id)
    const movieImages$ = this.movieDataService.getMovieImages(id)
    const movieActors$ = this.movieDataService.getMovieActors(id)
    const movieVideos$ = this.movieDataService.getMovieVideos(id)

    forkJoin([movieData$, movieImages$, movieActors$, movieVideos$]).subscribe(results => {
      const [movieData, movieImages, movieActors, movieVideos] = results;
      console.log(movieData, movieImages, movieActors, movieVideos)
      let firstFiveImages: Object[] = []
      let firstFiveActors: Object[] = []
      for(let i = 0; i < 4; i++) {
        firstFiveImages.push(movieImages.backdrops[i])
      }
      for(let i = 0; i < 8; i++) {
        firstFiveActors.push(movieActors.cast[i])
      }


      this.movieImages = firstFiveImages;
      this.movieData = movieData;
      this.movieActors = firstFiveActors
      this.movieVideos = movieVideos ? movieVideos.results[0] : null;

      console.log(this.movieVideos)
    })
  }
}
