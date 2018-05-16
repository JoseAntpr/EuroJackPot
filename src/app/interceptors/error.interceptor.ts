import { Injectable, Inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpEvent,
    HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any>> {
    console.log(req);
    return next.handle(req).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            console.log('Event in case of success: ', event);
        }
    },
    (err: any) => {
        if (err instanceof HttpErrorResponse) {
            this.router.navigate(['/error']);
        }
    });
  }
}
