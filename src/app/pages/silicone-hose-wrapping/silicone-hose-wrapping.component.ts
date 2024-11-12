import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-silicone-hose-wrapping',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './silicone-hose-wrapping.component.html',
  styleUrl: './silicone-hose-wrapping.component.css'
})
export default class SiliconeHoseWrappingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Silicone Hose Wrapping - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'We specialize in silicone, fluorosilicone, and FKM hose wrapping services, offering a wide range of products like straight couplers, hump hoses, reducers, elbows, T hoses, and more. We also provide various reinforcement options including Nomex/Aramid, polyester, and fiberglass to meet your specific requirements.');
    this.addMetaTag('keywords', 'Silicone hose wrapping service, Fluorosilicone hoses, FKM hoses, Silicone couplers, Silicone hump hoses, Silicone reducers, Silicone elbows, T hoses, CAC couplers, Coolant hoses, Nomex aramid reinforcement, Fiberglass hose reinforcement, Polyester hose reinforcement, Silicone hose manufacturing, Custom silicone hose');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Silicone Hose Wrapping Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'We specialize in silicone, fluorosilicone, and FKM hose wrapping services, offering a wide range of products like straight couplers, hump hoses, reducers, elbows, T hoses, and more. We also provide various reinforcement options including Nomex/Aramid, polyester, and fiberglass to meet your specific requirements.', 'property');
    this.addMetaTag('og:image', '/assets/shippingImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Silicone Hose Wrapping Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'We specialize in silicone, fluorosilicone, and FKM hose wrapping services, offering a wide range of products like straight couplers, hump hoses, reducers, elbows, T hoses, and more. We also provide various reinforcement options including Nomex/Aramid, polyester, and fiberglass to meet your specific requirements.');
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