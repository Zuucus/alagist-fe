import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
