import { EUROJACKPOT_FAKE } from './eurojackpot.fake.spec';

// rxjs imports
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class EuroJackpotProxyServiceFake {
    constructor() {}

    latestWinnerNumber(): Observable<any> {
        return of(EUROJACKPOT_FAKE);
    }
}
