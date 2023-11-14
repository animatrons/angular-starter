import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class Page1Component {

}
