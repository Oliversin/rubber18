import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './accordion.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { Meta, Title } from '@angular/platform-browser';


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
  title = 'rotomold18';
}
