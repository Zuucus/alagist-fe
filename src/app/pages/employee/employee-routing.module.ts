import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLisitComponent } from './components/employee-lisit/employee-lisit.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: EmployeeLisitComponent
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path:'new',
    component: EmployeeNewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {


 }
