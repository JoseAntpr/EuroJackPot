import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EuroJackpotProxyService } from './services/eurojackpot-proxy.service';
import { EuroJackPotService } from './services/eurojackpot.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EuroJackPotResultsComponent } from './components/eurojackpot-results/eurojackpot-results.component';



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
    EuroJackpotProxyService,
    EuroJackPotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
