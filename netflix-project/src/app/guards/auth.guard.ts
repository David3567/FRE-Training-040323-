import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UserService } from '../services/user-service.service';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  implements OnInit {
  private role$ = new BehaviorSubject<string | undefined>(undefined);

  constructor(private userService: UserService) {
    this.userService.user$.subscribe((user: User) => {
      console.log('In guard,', user);
      this.role$.next(user.role);
    });
  }

  ngOnInit(): void {
    // Implement the OnInit interface
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean {
    const user = this.userService.get();
    console.log('In guard,', user);

    if (user.role === undefined || user.role === '') {
      console.log('no such user');
      return of(false);
    } else {
      return of(true);
    }
  }
}
