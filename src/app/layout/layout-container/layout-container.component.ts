import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavTree } from 'src/app/shared/types/util.interfaces';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {
  opened: boolean = true;
  @Input() navTree: NavTree[] = [];

  toggleDrawer() {
    this.opened = !this.opened;
  }
}