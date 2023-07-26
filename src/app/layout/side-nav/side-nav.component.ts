import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, tap } from 'rxjs';
import { NavTree } from 'src/app/shared/types/util.interfaces';

@Component({
  templateUrl: './side-nav.component.html',
  selector: 'app-side-nav',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor(route: ActivatedRoute, router: Router) {

    this.url$ = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map(evt => (evt as NavigationEnd).url)
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
    }
  }

}
