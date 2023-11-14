import { Routes } from "@angular/router";
import { Feature1Component } from "./feature1.component";
import { FooComponent } from "./foo/foo.component";
import { BarComponent } from "./bar/bar.component";


export const FEATURE1_ROUTES: Routes = [
  {
    path: '',
    component: Feature1Component,
    children: [
      {
        path: 'foo',
        component: FooComponent
      },
      {
        path: 'bar',
        component: BarComponent
      }
    ]
  }
]
