import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EuroJackPotService } from '../../services/eurojackpot.service';
import { EuroJackPot } from '../../models/euro-jack-pot';


@Component({
  selector: 'app-eurojackpot-results',
  templateUrl: './eurojackpot-results.component.html',
  styleUrls: ['./eurojackpot-results.component.scss']
})
export class EuroJackPotResultsComponent implements OnInit, OnDestroy {

  euroJackPot: EuroJackPot;
  subscription: Subscription;

  constructor(private euroJackpotService: EuroJackPotService) {}

  ngOnInit() {
    this.subscription = this.euroJackpotService.getEuroJackPotData().subscribe( (res: EuroJackPot) => {
      this.euroJackPot = res;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
