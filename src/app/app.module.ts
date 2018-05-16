import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EuroJackpotProxyService } from './services/eurojackpot-proxy.service';
import { EuroJackPotService } from './services/eurojackpot.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EuroJackPotResultsComponent } from './components/eurojackpot-results/eurojackpot-results.component';

// Routing Module
import { app_routing } from './app.routes';
import { ErrorComponent } from './components/error/error.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EuroJackPotResultsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing
  ],
  providers: [
    EuroJackpotProxyService,
    EuroJackPotService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
