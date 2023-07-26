import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  @ViewChild('drawer') drawer!: ElementRef;

  toggleDrawer() {
    this.opened = !this.opened;
    // if (this.opened) {
    //   this.drawer.nativeElement.style = '';
    // } else {
    //   this.drawer.nativeElement.style.width = '64px';
    // }
  }
}
