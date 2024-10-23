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
    this.titleService.setTitle('Shipping Services - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Reliable and efficient shipping services at Rotomold Mexico. We ensure timely delivery of your products with our comprehensive logistics solutions.');
    this.addMetaTag('keywords', 'Shipping Services, Logistics, Delivery, Rotomold Mexico, Transportation');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Shipping Services - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Reliable and efficient shipping services at Rotomold Mexico. We ensure timely delivery of your products with our comprehensive logistics solutions.', 'property');
    this.addMetaTag('og:image', '/assets/shippingImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Shipping Services - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Reliable and efficient shipping services at Rotomold Mexico. We ensure timely delivery of your products with our comprehensive logistics solutions.');
    this.addMetaTag('twitter:image', '/assets/shippingImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
  }
}
