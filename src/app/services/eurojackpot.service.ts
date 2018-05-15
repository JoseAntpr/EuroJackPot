import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { EuroJackPot } from '../models/euro-jack-pot';
import { EuroJackpotProxyService } from './eurojackpot-proxy.service';


@Injectable()
export class EuroJackPotService {

  constructor( private euroJackPotProxyService: EuroJackpotProxyService) { }

  getEuroJackPotData(): Observable<EuroJackPot> {
    return this.euroJackPotProxyService.latestWinnerNumber().map( (response: any) => {
      const euroJackPot: EuroJackPot = new EuroJackPot();
      console.log(response);
      euroJackPot.currency = response.last.currency;
      euroJackPot.date = new Date(response.last.date.year, response.last.date.month - 1, response.last.date.day);
      euroJackPot.euroNumbers = response.last.euroNumbers;
      euroJackPot.numbers = response.last.numbers;
      euroJackPot.odds = response.last.odds;
      return euroJackPot;
    });
  }

}
