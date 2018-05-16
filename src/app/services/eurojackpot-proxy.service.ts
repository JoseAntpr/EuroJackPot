import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';

// rxjs Imports
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class EuroJackpotProxyService {

  constructor(private http: HttpClient) { }

  latestWinnerNumber(): Observable<HttpResponse<any>> {
    return this.http.get<any>(environment.apiUrl);
  }

}
