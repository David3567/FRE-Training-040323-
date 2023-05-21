import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, filter } from 'rxjs';
import { AuthService } from './auth.service';
import { Decoded } from 'src/app/core/model/Decoded';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class roleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> {
    return this.auth.userProfile$.pipe(
      filter(user => user !== null), // Filter out null values
      map((user: Decoded | null) => {
        if (user && (user.role === 'SUPERUSER' || user.role === 'ADMIN')) {
          return true;
        } else {
           this._snackBar.open("Please click on your username on the navbar to change your role!", 'Ok', {
            duration: 3000})
          return false;
        }
      })
    );
  }
}
