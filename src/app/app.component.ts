import { Component } from '@angular/core';
import { EuroJackpotService } from './services/euro-jackpot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public service: EuroJackpotService) {
    this.service.latestWinnerNumber().subscribe( res => {
      console.log(res);
    });
  }
}
