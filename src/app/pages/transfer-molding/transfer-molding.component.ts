import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { CommonModule } from '@angular/common';
import { SwiperinoSliderComponent } from '../../shared/components/swiperino-slider/swiperino-slider.component';


@Component({
  selector: 'app-transfer-molding',
  standalone: true,
  imports: [SwiperinoSliderComponent, RouterLink],
  providers: [GlobalVars],
  templateUrl: './transfer-molding.component.html',
  styleUrl: './transfer-molding.component.css'
})
export default class TransferMoldingComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Transfer Molding - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Our transfer molding service produces high-strength, detailed rubber components with excellent surface finishes. Ideal for precision applications like electrical components, seals, and intricate industrial parts.');
    this.addMetaTag('keywords', 'Mold Making, Transfer Molding, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding, Rubber Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Transfer Molding - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Our transfer molding service produces high-strength, detailed rubber components with excellent surface finishes. Ideal for precision applications like electrical components, seals, and intricate industrial parts.', 'property');
    this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Transfer Molding - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Our transfer molding service produces high-strength, detailed rubber components with excellent surface finishes. Ideal for precision applications like electrical components, seals, and intricate industrial parts.');
    this.addMetaTag('twitter:image', '/assets/services/rubberMoldingv2.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    // Canonical Tag
    this.addCanonicalTag('https://rubber-mexico.com/services/rubber-molding/transfer-molding');
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
