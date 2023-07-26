import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Module1Component,
    Page1Component,
    Page2Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    SharedModule
  ]
})
export class Module1Module { }
