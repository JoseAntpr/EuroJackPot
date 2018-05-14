import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EuroJackpotService } from './services/euro-jackpot.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EuroJackPotResultsComponent } from './components/euro-jack-pot-results/euro-jack-pot-results.component';
import { EuroJackPotDataService } from './components/euro-jack-pot-results/service/euro-jack-pot-data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EuroJackPotResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EuroJackpotService,
    EuroJackPotDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
