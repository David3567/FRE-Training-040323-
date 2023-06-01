import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { User } from 'src/app/core/user.interface';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  userData!: User;
  updateUserForm!: FormGroup;
  roleError: boolean = false;
  plans: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
    role: 'USER' | 'SUPERUSER' | 'ADMIN';
  }[] = [
    {
      name: 'Standard',
      price: 13.99,
      features: 'Great',
      resolution: '1080p',
      download: 'minimize',
      role: 'SUPERUSER',
    },
    {
      name: 'Premium',
      price: 17.99,
      features: 'Best',
      resolution: '4K+HDR',
      download: 'check',
      role: 'ADMIN',
    },
  ];
  displayedColumns: string[] = [
    'name',
    'price',
    'features',
    'resolution',
    'download',
  ];

  selectedRow!: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.updateUserForm = this.fb.group({
      role: [''],
    });
  }
  
  selectRow(row: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
    role: string;
  }): void {
    this.selectedRow = row;
    this.updateUserForm.get('role')?.setValue(row.role);
    this.roleError = false;
  }

  isSelected(row: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
  }): boolean {
    return this.selectedRow === row;
  }
  get role() {
    return this.updateUserForm.get('role');
  }

  updateUser() {
    if (!this.role?.value) {
      this.roleError = true;
    } else {
      this.userService.getUser().subscribe((user) => {
        const { username, email } = user;
        const userUpdateData = {
          username: username,
          email: email,
          role: this.role?.value,
        };
        this.authService.updateUser(userUpdateData).subscribe((res) => {
          this.localStorageService.storeToken(res.accessToken);
          this.localStorageService.storeUserRole(res.role);
          const user = this.localStorageService.decodeToken(res.accessToken);
          if (user) {
            this.userService.setUser(user);
          }
          this.router.navigate(['/']);
        });
      });
    }
  }
}
