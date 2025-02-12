import { Component, afterNextRender } from '@angular/core';
import { ProductDetailsComponent } from '../../../../shared/components/product-details/product-details.component';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../../../global-vars';
import { FormContactComponent } from '../../../../shared/components/form-contact/form-contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-o-rings',
  standalone: true,
  imports: [ProductDetailsComponent, RouterLink],
  providers: [GlobalVars],
  templateUrl: './o-rings.component.html',
  styleUrl: './o-rings.component.css'
})
export default class ORingsComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) {
    afterNextRender(() => {
        this.addCanonicalTag('https://rubber-mexico.com/rubber-molding/products/o-rings');
      });
   }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('O-Rings - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'High-performance O-Rings for enhanced durability and secure connections. Built to withstand high pressure and temperature, ensuring optimal engine efficiency.');
    this.addMetaTag('keywords', 'O-Rings, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'O-Rings - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'High-performance O-Rings for enhanced durability and secure connections. Built to withstand high pressure and temperature, ensuring optimal engine efficiency.', 'property');
    this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'O-Rings - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'High-performance O-Rings for enhanced durability and secure connections. Built to withstand high pressure and temperature, ensuring optimal engine efficiency.');
    this.addMetaTag('twitter:image', '/assets/services/rubberMoldingv2.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    // Canonical Tag
  }

  private addCanonicalTag(url: string) {
    // Remove existing canonical link tag if present
    const existingCanonical = this.meta.getTag('rel="canonical"');
    if (existingCanonical) {
      this.meta.removeTagElement(existingCanonical);
    }
  
    // Add the new canonical link tag
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'canonical');
    linkTag.setAttribute('href', url);
    document.head.appendChild(linkTag);
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }

}
