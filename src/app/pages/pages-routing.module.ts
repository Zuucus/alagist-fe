import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
     import('./home/home.module').then((m) => m.HomeModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
