import { Component, OnInit, OnDestroy } from '@angular/core';
import { EuroJackpotService } from '../../services/euro-jackpot.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-euro-jack-pot-results',
  templateUrl: './euro-jack-pot-results.component.html',
  styleUrls: ['./euro-jack-pot-results.component.scss']
})
export class EuroJackPotResultsComponent implements OnInit, OnDestroy {

  euroJackPot;
  subscription: Subscription;

  constructor(private euroJackpotService: EuroJackpotService) {}

  ngOnInit() {
    this.subscription = this.euroJackpotService.latestWinnerNumber().subscribe( (res: any) => {
      console.log(res);
      this.euroJackPot = res.last;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
