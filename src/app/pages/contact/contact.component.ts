import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-contact',
  standalone: true,
  providers:[GlobalVars],
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars:GlobalVars) { }

  ngOnInit(): void {
    this.titleService.setTitle('Rotomold Mexico - Home');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call' });
    this.meta.addTag({ name: 'keywords', content: 'Rotational Molding, Rotomold Mexico, Mold Making, Foam Insulation, Shipping, Stocking, Compression Molding, Extrusion, Rapid Prototyping, Quality Manufacturing' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'RotomoldMexico - Home' });
    this.meta.addTag({ property: 'og:description', content: 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call' });
    this.meta.addTag({ property: 'og:image', content: '/assets/logoHeader.png' });
  }
}
