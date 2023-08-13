import { Component } from '@angular/core';
import { NavTree } from './shared/types/util.interfaces';

@Component({
  selector: 'app-root',
  template: `
    <app-layout-container [navTree]="navTree" class="h-100 w-100 ruz-theme">
      <router-outlet></router-outlet>
    </app-layout-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter';

  navTree: NavTree[] = [
    {
      title: 'Module 0',
      path: '/module0',
      icon: 'home'
    },
    {
      title: 'Module 10',
      active: false,
      icon: 'radio_button_checked',

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
    }
  ]
}
