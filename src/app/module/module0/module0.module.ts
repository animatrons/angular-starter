import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module0RoutingModule } from './module0-routing.module';
import { Module0Component } from './module0.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Module0Component
  ],
  imports: [
    CommonModule,
    Module0RoutingModule,
    SharedModule
  ]
})
export class Module0Module { }
