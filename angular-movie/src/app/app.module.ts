import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

function initializeAppFactory(): void {
  console.log("hi")
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: () => initializeAppFactory,
    deps:[],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
