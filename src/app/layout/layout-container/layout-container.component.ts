import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavTree } from 'src/app/shared/types/util.interfaces';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Store, select } from '@ngrx/store';
import {ThemeActions} from 'src/app/store/actions/theme.actions';
import * as fromTheme from 'src/app/store/selectors/theme.selectors';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SideNavComponent, MatSidenavModule, MatSlideToggleModule, AsyncPipe]
})
export class LayoutContainerComponent implements OnInit {
  opened: boolean = true;
  selectedTheme = '';
  currentTheme = 'dark-theme';

  darkMode$: Observable<boolean>;;


  @Input() navTree: NavTree[] = [];
  @ViewChild('drawer') drawer!: ElementRef;

  constructor(public store: Store) {
    this.darkMode$ = this.store.pipe(select(fromTheme.selectDarkModeState));
  }

  toggleDrawer() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.store.dispatch(ThemeActions.initTheme());
  }

  switchTheme({ checked }: MatSlideToggleChange) {
    if (checked) {
      this.store.dispatch(ThemeActions.enableDarkMode());
    } else {
      this.store.dispatch(ThemeActions.disableDarkMode());
    }
  }

}
