import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export default class ServicesComponent implements OnInit{
  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Rotomold Mexico - Services');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Discover our diverse capabilities, including rotational molding, mold making, post-processing, foam insulation, and more. Click below to explore the range of high-quality, custom products we can create for your needs.' });
    this.meta.addTag({ name: 'keywords', content: 'Rotational Molding, Rotomold Mexico, Mold Making, Foam Insulation, Shipping, Stocking, Compression Molding, Extrusion, Rapid Prototyping, Quality Manufacturing' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'RotomoldMexico - Services' });
    this.meta.addTag({ property: 'og:description', content: 'Discover our diverse capabilities, including rotational molding, mold making, post-processing, foam insulation, and more. Click below to explore the range of high-quality, custom products we can create for your needs.' });
    this.meta.addTag({ property: 'og:image', content: '/assets/logoHeader.png' });
  }
}