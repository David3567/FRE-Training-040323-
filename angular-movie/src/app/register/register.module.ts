import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordComponent } from './components/password/password.component';
import { SelectplanComponent } from './components/selectplan/selectplan.component';

@NgModule({
  declarations: [
    RegisterComponent,
    PasswordComponent,
    SelectplanComponent
  ],
  imports: [
    RegisterRoutingModule,
    SharedModule,
  ],
})
export class RegisterModule { }
