import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'prueba', component: PruebaComponent},
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule {}
