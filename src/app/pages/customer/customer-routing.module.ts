import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CustomerListComponent
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path:'new',
    component: CustomerNewComponent
  },
  {
    path: 'calendar',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
