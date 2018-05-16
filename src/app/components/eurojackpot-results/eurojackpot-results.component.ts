import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import { EuroJackPotService } from '../../services/eurojackpot.service';

// Models
import { EuroJackPot } from '../../models/euro-jack-pot';

// rxjs imports
import { Subscription } from 'rxjs/Subscription';


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
    this.subscription = this.euroJackpotService.getEuroJackPotData().subscribe( (lastEurojackpot: EuroJackPot) => {
      this.euroJackPot = lastEurojackpot;
    });

  }
  /* Unsubscribe the Observable to avoid memory leaks */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
