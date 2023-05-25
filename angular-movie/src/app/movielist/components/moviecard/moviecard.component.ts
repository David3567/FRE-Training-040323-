import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/core/model/Movie';
import { MovieDataService } from 'src/app/shared/service/moviedata/movie-data.service';
import { ResolveDetailsService } from 'src/app/shared/service/resolvers/resolve-details.service';
import { RestorescrollService } from 'src/app/shared/service/utility/restorescroll.service';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent {
  isLoading = false;
  routerEventSubscriber = new Subject<void>();
  @Input() movieInfo!: Movie;
  @Input() page!:number;
  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];
  constructor(private data: MovieDataService, private router: Router, private resolver: ResolveDetailsService, private scrollService: RestorescrollService) {
    this.router.events.pipe(
      takeUntil(this.routerEventSubscriber)
    ).subscribe((routerEvent) => {
      this.checkRouterEvent(routerEvent as RouterEvent);
    });
  }
  ngOnInit() {
    this.movieInfo.poster_path = this.data.img_url + this.movieInfo.poster_path;
  }
  onClick(id: number) {
    this.router.navigate(['/moviedetails', id]);
    this.scrollService.savePosition(window.scrollY);
  }


  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      if (routerEvent.url.split('/').pop() === this.movieInfo.id.toString()) {
        this.isLoading = true;
      }
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }
  ngOnDestroy(): void {
    this.routerEventSubscriber.next();
  }
}
