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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
