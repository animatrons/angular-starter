import { Routes } from '@angular/router';
import { Module1Component } from './module1.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

export const MODULE1_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Module1Component,
    children: [
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      },
    ]
  }
];
