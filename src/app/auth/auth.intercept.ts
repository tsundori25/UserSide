import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let requestAuth = req;
    const token = this.authService.getToken;
    if (token !== null) {
      requestAuth = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(requestAuth);
  }
}

@Injectable({ providedIn: 'root' })
export class ErrorIntercept implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if ([401, 403].indexOf(err.status) !== -1) {
          this.authService.logout();
          window.location.reload();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}

export const authIntercept = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
export const errorIntercept = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorIntercept,
  multi: true,
};
