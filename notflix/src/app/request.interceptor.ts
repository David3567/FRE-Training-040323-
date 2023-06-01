import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('hey')
    console.log(request.url)
    if(request.url === 'http://localhost:4232/auth/userupdate') {
      console.log('requested')
      const jwt = localStorage.getItem('accessToken')
      console.log(jwt);
      const newHeader = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`
        }
      })
      console.log(newHeader)
      return next.handle(newHeader)
    }
    return next.handle(request);
  }
}
