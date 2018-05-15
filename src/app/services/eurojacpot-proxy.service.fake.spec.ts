import { EUROJACKPOT_FAKE } from './eurojackpot.fake.spec';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class EuroJackpotProxyServiceFake {
    constructor() {}

    latestWinnerNumber(): Observable<HttpResponse<any>> {
        const httpResponse =  new HttpResponse<any>(
            {body: EUROJACKPOT_FAKE}
        );
        return of(httpResponse);
    }
}
