import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { EuroJackpotService } from '../../../services/euro-jackpot.service';
import { Observable } from 'rxjs/Observable';
import { EuroJackPot } from '../../../classes/euro-jack-pot';

@Injectable()
export class EuroJackPotDataService {

  constructor( private euroJackPotService: EuroJackpotService) { }

  getEuroJackPotData(): Observable<EuroJackPot> {
    return this.euroJackPotService.latestWinnerNumber().map( (response: any) => {
      const euroJackPot: EuroJackPot = new EuroJackPot();
      euroJackPot.currency = response.last.currency;
      euroJackPot.date = new Date(response.last.date.full);
      euroJackPot.euroNumbers = response.last.euroNumbers;
      euroJackPot.numbers = response.last.numbers;
      euroJackPot.odds = response.last.odds;
      return euroJackPot;
    });
  }

}
