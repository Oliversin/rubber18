import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalVars } from '../../../global-vars';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  providers: [GlobalVars],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars:GlobalVars) { }
}
