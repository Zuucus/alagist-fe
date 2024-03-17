import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZooPageNotFoundComponent } from './core/components/zoo-page-not-found/zoo-page-not-found/zoo-page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages-routing.module').then((m) => m.PagesRoutingModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'unauthorized',
    component: ZooPageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
