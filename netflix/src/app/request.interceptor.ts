import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './core/local-storage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url === 'http://localhost:4231/auth/userupdate') {
      const token = this.localStorageService.getToken();
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
