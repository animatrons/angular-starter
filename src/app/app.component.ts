import { Component } from '@angular/core';
import { NavTree } from './shared/types/util.interfaces';
import { RouterOutlet } from '@angular/router';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-layout-container [navTree]="navTree" class="h-100 w-100">
      <router-outlet></router-outlet>
    </app-layout-container>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LayoutContainerComponent],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ]
})
export class AppComponent {
  title = 'angular-starter';

  navTree: NavTree[] = [
    {
      title: 'Module 0',
      path: '/module0',
      icon: 'home',
    },
    {
      title: 'Module 10',
      active: false,
      icon: 'radio_button_checked',
      path: '/module1',
      disabled: true,
      children: [
        {
          title: 'Page 1',
          path: '/module1/page1',
          icon: 'shopping_cart_checkout',
          active: false,
        },
        {
          title: 'Page 2',
          active: false,
          icon: 'star_half',
          path: '/module1/page2',
        },
      ]
    },
    {
      title: 'Module 2',
      active: false,
      path: '/module2',
      disabled: true,
      children: [
        {
          title: 'Page 1',
          icon: 'dataset',
          active: false,
          path: '/module2/page1',
        },
        {
          title: 'Page 2',
          icon: 'settings_accessibility',
          active: false,
          path: '/module2/page2',
        },
      ]
    },
    {
      title: 'Feature 1',
      path: '/feature1',
      icon: 'shopping_cart_checkout'
    }
  ]
}
