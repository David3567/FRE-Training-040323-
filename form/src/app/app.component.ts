import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  formData: any = {
  };

  handleOnSubmit(data: Object) {
    console.log(data);
    this.formData = data;
    console.log(this.formData);
  }
}
