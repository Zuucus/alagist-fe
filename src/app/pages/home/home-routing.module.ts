import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { DiscoverPlacesComponent } from './components/discover-places/discover-places.component';
import { SalonDetailViewComponent } from './components/salon-detail-view/salon-detail-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.DOCUMENTTEMPLATE] },
  },
  {
    path: 'login',
   component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.DOCUMENTTEMPLATE] },
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'discover-places',
    component: DiscoverPlacesComponent,
  },
  {
    path: 'salon-detail-view',
    component: SalonDetailViewComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
