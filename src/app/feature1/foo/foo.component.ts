import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent {

}
