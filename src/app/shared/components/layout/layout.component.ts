import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { Headerv2Component } from '../headerv2/headerv2.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeadComponent, FooterComponent, RouterOutlet, Headerv2Component],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
