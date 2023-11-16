import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { Observable, filter, map, share, shareReplay, tap } from 'rxjs';
import { PathRootMatchPipe } from 'src/app/shared/pipes/path-root-match.pipe';
import { NavTree } from 'src/app/shared/types/util.interfaces';

@Component({
  templateUrl: './side-nav.component.html',
  selector: 'app-side-nav',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe, RouterLink, MatIconModule, MatListModule, PathRootMatchPipe]
})
export class SideNavComponent {
  @Input() toggled!: boolean;
  @Input() navTree: NavTree[] = [];
  @Input() title = '';

  @Output() openChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() opened = true;

  @ViewChild('sidenavMain') sidenavMain!: ElementRef;

  expand = false;
  expand2 = false;
  url$!: Observable<string>

  constructor(route: ActivatedRoute, private router: Router) {

    this.url$ = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map(evt => (evt as NavigationEnd).url),
      shareReplay(),
    )
  }

  toggleDrawer() {
    this.opened = !this.opened;
    this.openChanged.emit(this.opened);
    if (this.opened) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');
      this.sidenavMain.nativeElement.style = '';
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');
      this.sidenavMain.nativeElement.style.width = '64px';
      this.collapseAll(this.navTree);
    }
  }

  collapseAll(tree: NavTree[]) {
    tree.forEach(item => {
      item.active = false;
      if (item.children) {
        this.collapseAll(item.children);
      }
    })
  }

  activateLink(path: string | null, disabled?: boolean) {
    if (path && !disabled) this.router.navigate([path]);
  }

}
