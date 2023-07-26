import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module0Component } from './module0.component';

const routes: Routes = [{ path: '', component: Module0Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module0RoutingModule { }
