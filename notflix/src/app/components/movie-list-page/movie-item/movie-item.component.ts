import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CurrentStepService } from 'src/app/current-step.service';
import { MovieDataService } from 'src/app/movieData.service';
import { TruncatePipe } from 'src/app/truncate.pipe';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor(private truncatePipe: TruncatePipe, private movieDataService: MovieDataService, private router: Router, private route: ActivatedRoute, private authService: AuthService, private currentStepService: CurrentStepService) {

  }
  @Input() movieInfo: any;
  @Input() loading: boolean;
  // movieID: number;
  // movieOverview: string;
  // movieYear: number;

  ngOnInit() {
    // this.movieOverview = this.truncatePipe.transform(this.movieInfo.overview)
    // this.movieID = this.movieInfo.id
    // this.movieYear = new Date(this.movieInfo.releaseDate).getFullYear()
    // console.log(this.movieYear)
    this.route.data.subscribe(data => {
      const resolvedData = data['movieData'];
      this.loading = resolvedData;

    })
  }

  getRouterLink() {
    const userRole = this.authService.role;
    if(userRole === 'USER') {
      this.currentStepService.setCurrentStep(3);
      return ['/register']
    } else {
      return ['/movies', this.movieInfo.id]
    }
  }

  // ['/movies', movieInfo.id]

  // onClick() {
  //   this.router.navigate(['/movies', this.movieID])
  // }
}
