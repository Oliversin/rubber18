import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { PartnersTrustComponent } from "../../shared/components/partners-trust/partners-trust.component";
import { SwiperinoSliderComponent } from "../../shared/components/swiperino-slider/swiperino-slider.component";
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { HorizontalCardComponent } from '../../shared/components/horizontal-card/horizontal-card.component';

@Component({
  selector: 'app-rubber-molding',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent, PartnersTrustComponent, SwiperinoSliderComponent,ProductCardComponent,HorizontalCardComponent],
  providers:[GlobalVars],
  templateUrl: './rubber-molding.component.html',
  styleUrl: './rubber-molding.component.css'
})
export default class RubberMoldingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Rubber Molding Services - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Rubber-Mexico offers precision rubber molding services, producing high-quality molded rubber parts for industries like automotive, medical, and manufacturing. We specialize in custom molding solutions, ensuring durability, performance, and exact specifications for every project.');
    this.addMetaTag('keywords', 'Rubber molding service, Custom rubber molding, Molded rubber parts, Rubber molding solutions, Precision rubber molding, Rubber manufacturing, Automotive rubber parts, Medical rubber molding, Rubber molding Mexico, Custom rubber components, High-quality rubber molding, Rubber molding for manufacturing');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Rubber Molding Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Rubber-Mexico offers precision rubber molding services, producing high-quality molded rubber parts for industries like automotive, medical, and manufacturing. We specialize in custom molding solutions, ensuring durability, performance, and exact specifications for every project.', 'property');
    this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Rubber Molding Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Rubber-Mexico offers precision rubber molding services, producing high-quality molded rubber parts for industries like automotive, medical, and manufacturing. We specialize in custom molding solutions, ensuring durability, performance, and exact specifications for every project.');
    this.addMetaTag('twitter:image', '/assets/services/rubberMoldingv2.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    // Canonical Tag
    this.addCanonicalTag('https://rubber-mexico.com/services/rubber-molding');
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