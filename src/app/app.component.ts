import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="h-100 w-100 ruz-theme">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter';
}
