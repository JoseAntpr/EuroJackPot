import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EuroJackPotService } from '../../services/eurojackpot.service';


@Component({
  selector: 'app-euro-jack-pot-results',
  templateUrl: './euro-jack-pot-results.component.html',
  styleUrls: ['./euro-jack-pot-results.component.scss']
})
export class EuroJackPotResultsComponent implements OnInit, OnDestroy {

  euroJackPot;
  subscription: Subscription;

  constructor(private euroJackpotService: EuroJackPotService) {}

  ngOnInit() {
    this.subscription = this.euroJackpotService.getEuroJackPotData().subscribe( (res: any) => {
      this.euroJackPot = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
