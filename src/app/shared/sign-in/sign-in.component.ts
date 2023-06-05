import { Component } from '@angular/core';
import { userData } from 'src/app/core/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from 'src/app/core/localStorage';
import { AuthService } from 'src/app/core/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private storage: LocalStorageService,
  ) { }

  input: userData[] = [];
  valid: boolean = true;
  errorText: string = '';

  storeData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  onSubmit() {
    if (this.storeData.valid) {
      this.AuthService.signIn(this.storeData).subscribe((res: any) => {
          console.log(res);
          if (res == false) {
            this.valid = false;
          } else {
            console.log('res', res);
            const decodedToken: any = jwt_decode(res.accessToken);
            console.log(decodedToken);
            this.storage.setItem('userInfo', res.accessToken);
            this.storage.setItem('signup-username', decodedToken.username);
            this.storage.setItem('signup-email', decodedToken.email);
            this.storage.setItem('signup-role', res.role);
            this.storage.setItem('signup-tmdb', decodedToken.tmdb_key);
            this.router.navigate(['/movie-list']);
          }
        },
        (error: any) => {
          if (error.status === 401) {
            this.errorText = 'Please check your email and password';
          } else {
            this.errorText = 'An error occurred. Please try again later.';
          }
        }
      );
    }
  }

}
