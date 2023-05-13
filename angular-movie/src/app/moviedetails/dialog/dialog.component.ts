import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { retry } from 'rxjs';
import { MovieDataService } from 'src/app/shared/service/moviedata/movie-data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() movieId!: number;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
      data: {
        movieId: this.movieId
      },
      panelClass: 'custom-modalbox',
      width: '920px'
    });
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-template.html',
})
export class DialogElementsExampleDialog {
  videos!: string[];
  index: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { movieId: string }, private dataService: MovieDataService) { }
  ngOnInit() {
    this.dataService.fetchMovieVideos(Number(this.data.movieId)).subscribe(data => {
      if (data.results) {
        this.videos = data.results.map((e) => {
          return e.key;
        }).filter(Boolean) as string[];
      }
    })
  }
  changeVideo(direction: number) {
    // circular indexing
    this.index = (this.index + direction + this.videos.length) % this.videos.length;
  }
}
