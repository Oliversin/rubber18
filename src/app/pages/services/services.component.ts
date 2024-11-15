import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CardInputComponent } from '../../shared/components/card-input/card-input.component';
import { RouterLink } from '@angular/router';
import { RubberAdComponent } from '../../shared/components/rubber-ad/rubber-ad.component';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardInputComponent, RouterLink,RubberAdComponent],
  providers:[GlobalVars],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export default class ServicesComponent implements OnInit{
  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Our Services - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Discover the comprehensive range of services at Rubber-Mexico, including rotational molding, mold making, post processing, foam insulation, and shipping. Tailored solutions for all your manufacturing needs.');
    this.addMetaTag('keywords', 'Services, Rubber-Mexico, Rotational Molding, Mold Making, Post Processing, Foam Insulation, Shipping, Custom Solutions');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Our Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Discover the comprehensive range of services at Rubber-Mexico, including rotational molding, mold making, post processing, foam insulation, and shipping. Tailored solutions for all your manufacturing needs.', 'property');
    this.addMetaTag('og:image', '/assets/servicesImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Our Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Discover the comprehensive range of services at Rubber-Mexico, including rotational molding, mold making, post processing, foam insulation, and shipping. Tailored solutions for all your manufacturing needs.');
    this.addMetaTag('twitter:image', '/assets/servicesImage.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }
}