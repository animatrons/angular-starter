import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavTree } from 'src/app/shared/types/util.interfaces';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SideNavComponent, MatSidenavModule, MatSlideToggleModule]
})
export class LayoutContainerComponent implements OnInit {
  opened: boolean = true;
  selectedTheme = '';
  currentTheme = 'dark-theme';


  @Input() navTree: NavTree[] = [];
  @ViewChild('drawer') drawer!: ElementRef;

  toggleDrawer() {
    this.opened = !this.opened;
  }

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'dark-theme';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  switchTheme({ checked }: MatSlideToggleChange) {
    this.currentTheme = checked ? 'dark-theme' : 'light-theme';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeTheme', this.currentTheme);
  }

}
