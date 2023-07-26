import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() toggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  expand = false;
  expand2 = false;
  url$!: Observable<string>

  constructor(route: ActivatedRoute, router: Router) {

    this.url$ = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map(evt => (evt as NavigationEnd).url)
    )
  }

}
