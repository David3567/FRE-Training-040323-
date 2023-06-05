import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth-service';
import { LocalStorageService } from 'src/app/core/localStorage';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private AuthService: AuthService,
  ) {}

  plan: number = 0;

  selectPlan(plan: any) {
    this.plan = plan;
  }

  onSubmit() {
    if (this.plan == 1) {
      this.storage.setItem("signup-role", "USER");
    } else if (this.plan == 2) {
      this.storage.setItem("signup-role", "SUPERUSER");
    } else if (this.plan == 3) {
      this.storage.setItem("signup-role", "ADMIN");
    }

    const username = this.storage.getItem("signup-username");
    const password = this.storage.getItem("signup-pw");
    const email = this.storage.getItem("signup-email");
    const role = this.storage.getItem("signup-role");
    const tmdb = this.storage.getItem("signup-tmdb");
    let userInfo = [username, password, email, role, tmdb];

    this.AuthService.signUp(userInfo).subscribe((res: any) => {
      console.log(res);
      this.storage.setItem("userInfo", res.accessToken);
    })
    this.router.navigate(['/movie-list']);
  }
}
