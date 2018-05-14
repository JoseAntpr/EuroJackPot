import { Component, OnInit, OnDestroy } from '@angular/core';
import { EuroJackpotService } from '../../services/euro-jackpot.service';
import { Subscription } from 'rxjs/Subscription';
import { EuroJackPotDataService } from './service/euro-jack-pot-data.service';

@Component({
  selector: 'app-euro-jack-pot-results',
  templateUrl: './euro-jack-pot-results.component.html',
  styleUrls: ['./euro-jack-pot-results.component.scss']
})
export class EuroJackPotResultsComponent implements OnInit, OnDestroy {

  euroJackPot;
  subscription: Subscription;

  constructor(private euroJackpotService: EuroJackPotDataService) {}

  ngOnInit() {
    this.subscription = this.euroJackpotService.getEuroJackPotData().subscribe( (res: any) => {
      this.euroJackPot = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
