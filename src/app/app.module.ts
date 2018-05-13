import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EuroJackpotService } from './services/euro-jackpot.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EuroJackpotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
