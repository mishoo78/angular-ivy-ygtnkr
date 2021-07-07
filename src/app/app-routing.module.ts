import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'h',
    loadChildren: () => import('../app/shared/layouts/home-layout/home-layout.module').then(m => m.HomeLayoutModule),
  },
  {
    path: 'd',
    loadChildren: () => import('../app/shared/layouts/dashboard-layout/dashboard-layout.module').then(m => m.DashboardLayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
