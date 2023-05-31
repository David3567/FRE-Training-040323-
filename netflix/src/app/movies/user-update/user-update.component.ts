import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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
  ngOnInit(): void {
    this.updateUserForm = this.fb.group({
      role: [''],
    });
  }

  updateUser() {
    if (!this.role?.value) {
      this.roleError = true;
    } else {
      console.log('test!');
    }
  }
}
