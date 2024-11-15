import { Component, OnInit } from '@angular/core';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export default class ShippingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Shipping Services - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Reliable and efficient shipping services at Rubber-Mexico. We ensure timely delivery of your products with our comprehensive logistics solutions.');
    this.addMetaTag('keywords', 'Shipping Services, Logistics, Delivery, Rubber-Mexico, Transportation');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Shipping Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Reliable and efficient shipping services at Rubber-Mexico. We ensure timely delivery of your products with our comprehensive logistics solutions.', 'property');
    this.addMetaTag('og:image', '/assets/shippingImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Shipping Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Reliable and efficient shipping services at Rubber-Mexico. We ensure timely delivery of your products with our comprehensive logistics solutions.');
    this.addMetaTag('twitter:image', '/assets/shippingImage.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }
}
