import { Component, Inject } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profiledialog',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profiledialog.component.scss']
})
export class ProfiledialogComponent {
  ProfileForm: FormGroup;
  roles = ['USER', 'ADMIN', 'SUPERUSER'];


  constructor(private auth: AuthService, private fb: FormBuilder, private dialogRef: MatDialogRef<ProfiledialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.ProfileForm = fb.group({
      role: '',
    })

  }
  ngOnInit() {
    this.auth.userProfile$.subscribe(profile => {
      if (profile) {
        this.ProfileForm.patchValue({
          role: profile.role
        })
      }

    })
  }

  editRole() {
    this.auth.updateRole(this.ProfileForm.value['role']);
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }


}
