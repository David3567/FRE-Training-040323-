import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'PATCH'){
      let token = localStorage.getItem('access_token')
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
      console.log(req);
    }
    return next.handle(req);
  }
}
