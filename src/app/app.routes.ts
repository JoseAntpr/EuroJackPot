import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuroJackPotResultsComponent } from './components/eurojackpot-results/eurojackpot-results.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', component: EuroJackPotResultsComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(routes);
