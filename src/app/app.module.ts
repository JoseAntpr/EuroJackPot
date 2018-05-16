import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { EuroJackpotProxyService } from './services/eurojackpot-proxy.service';
import { EuroJackPotService } from './services/eurojackpot.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EuroJackPotResultsComponent } from './components/eurojackpot-results/eurojackpot-results.component';
import { ErrorComponent } from './components/error/error.component';

// Routing Module
import { app_routing } from './app.routes';

// Interceptors
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
