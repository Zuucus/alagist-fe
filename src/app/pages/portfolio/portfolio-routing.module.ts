import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioNewComponent } from './components/portfolio-new/portfolio-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PortfolioListComponent
    // canActivate: [AuthGuard],
    // data: { roles: [Role.USER, Role.SuperUser] },
  },
  {
    path:'new',
    component: PortfolioNewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
