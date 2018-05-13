import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EuroJackpotService {

  constructor(private http: HttpClient) { }

  latestWinnerNumber() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.get(environment.apiUrl, { headers: headers });
  }

}
