import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AccordionComponent } from './accordion.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

declare var gtag: Function;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AccordionComponent, HlmButtonDirective],
  host: {
    class: 'block'
  },
  template: `
    <router-outlet />
  `
})
export class AppComponent {
  constructor(private router: Router) {
    // Track page views when route changes
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Send page view to Google Analytics
      gtag('config', 'G-FS5P5NX3KM', {
        page_path: event.urlAfterRedirects, // Pass the new URL
      });
    });
  }
}
