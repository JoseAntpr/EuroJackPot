import { Injectable } from '@angular/core';

// Model
import { EuroJackPot } from '../models/euro-jack-pot';

// Services
import { EuroJackpotProxyService } from './eurojackpot-proxy.service';

// rxjs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { last } from '@angular/router/src/utils/collection';


@Injectable()
export class EuroJackPotService {

  constructor( private euroJackPotProxyService: EuroJackpotProxyService) { }

  getEuroJackPotData(): Observable<EuroJackPot> {
    return this.euroJackPotProxyService.latestWinnerNumber().map( (response: any) => {
      const euroJackPot: EuroJackPot = new EuroJackPot();
      const {currency, date, euroNumbers, odds, numbers } = response.last;
      euroJackPot.currency = currency;
      euroJackPot.date = new Date(date.year, date.month - 1, date.day);
      euroJackPot.euroNumbers = euroNumbers;
      euroJackPot.numbers = numbers;
      euroJackPot.odds = odds;
      return euroJackPot;
    });
  }

}
