import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NavTree } from 'src/app/shared/types/util.interfaces';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SideNavComponent, MatSidenavModule]
})
export class LayoutContainerComponent {
  opened: boolean = true;
  @Input() navTree: NavTree[] = [];
  @ViewChild('drawer') drawer!: ElementRef;

  toggleDrawer() {
    this.opened = !this.opened;
  }
}
