import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class EuroJackpotProxyService {

  constructor(private http: HttpClient) { }

  latestWinnerNumber(): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.get<any>(environment.apiUrl, { headers: headers });
  }

}
