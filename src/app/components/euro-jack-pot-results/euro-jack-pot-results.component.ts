import { Component, OnInit } from '@angular/core';
import { EuroJackpotService } from '../../services/euro-jackpot.service';

@Component({
  selector: 'app-euro-jack-pot-results',
  templateUrl: './euro-jack-pot-results.component.html',
  styleUrls: ['./euro-jack-pot-results.component.scss']
})
export class EuroJackPotResultsComponent implements OnInit {

  euroJackPot;

  constructor(private euroJackpotService: EuroJackpotService) {}

  ngOnInit() {
    this.euroJackpotService.latestWinnerNumber().subscribe( (res: any) => {
      console.log(res);
      this.euroJackPot = res.last;
    });
  }

}
