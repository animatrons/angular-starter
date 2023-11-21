import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

const DARK_THEME_CLASS = 'dark-theme';
const LIGHT_THEME_CLASS = 'light-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleDarkMode(enable: boolean) {
    console.log('Toggling dark mode', enable);

    if (enable) {
      this.renderer.addClass(this.document.body, DARK_THEME_CLASS);
      this.renderer.removeClass(this.document.body, LIGHT_THEME_CLASS);
    } else {
      this.renderer.addClass(this.document.body, LIGHT_THEME_CLASS);
      this.renderer.removeClass(this.document.body, DARK_THEME_CLASS);
    }
  }


}
