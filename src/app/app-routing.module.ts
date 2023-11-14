import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module0',
    loadChildren: () => import('./module/module0/module0.routes').then(m => m.MODULE0_ROUTES)
  },
  {
    path: 'module1',
    loadChildren: () => import('./module/module1/module1.routes').then(m => m.MODULE1_ROUTES)
  },
  {
    path: 'feature1',
    loadChildren: () => import('./feature1/feature1.routes').then(m => m.FEATURE1_ROUTES)
  },
  {
    path: '',
    redirectTo: 'module0',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'module0',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
