import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpEvent,
    HttpResponse
} from '@angular/common/http';


// rxjs imports
import { catchError } from 'rxjs/operators/catchError';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

/* Intercept http reponses and in case of error redirect to error page. */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any>> {
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
