import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { SwiperinoSliderComponent } from '../../shared/components/swiperino-slider/swiperino-slider.component';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-silicone-hose-wrapping',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent,SwiperinoSliderComponent, ProductCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[GlobalVars],
  templateUrl: './silicone-hose-wrapping.component.html',
  styleUrl: './silicone-hose-wrapping.component.css'
})
export default class SiliconeHoseWrappingComponent implements OnInit {

  slidesPerView = 3;
  breakpoints = {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    
    
  };

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Mandrel Formed Hoses - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'We specialize in silicone, fluorosilicone, and FKM hose wrapping services, offering a wide range of products like straight couplers, hump hoses, reducers, elbows, T hoses, and more. We also provide various reinforcement options including Nomex/Aramid, polyester, and fiberglass to meet your specific requirements.');
    this.addMetaTag('keywords', 'Mandrel Formed Hoses service, Fluorosilicone hoses, FKM hoses, Silicone couplers, Silicone hump hoses, Silicone reducers, Silicone elbows, T hoses, CAC couplers, Coolant hoses, Nomex aramid reinforcement, Fiberglass hose reinforcement, Polyester hose reinforcement, Silicone hose manufacturing, Custom silicone hose');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Mandrel Formed Hoses Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'We specialize in silicone, fluorosilicone, and FKM hose wrapping services, offering a wide range of products like straight couplers, hump hoses, reducers, elbows, T hoses, and more. We also provide various reinforcement options including Nomex/Aramid, polyester, and fiberglass to meet your specific requirements.', 'property');
    this.addMetaTag('og:image', '/assets/shippingImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Mandrel Formed Hoses Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'We specialize in silicone, fluorosilicone, and FKM hose wrapping services, offering a wide range of products like straight couplers, hump hoses, reducers, elbows, T hoses, and more. We also provide various reinforcement options including Nomex/Aramid, polyester, and fiberglass to meet your specific requirements.');
    this.addMetaTag('twitter:image', '/assets/shippingImage.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    // Canonical Tag
    this.addCanonicalTag('https://rubber-mexico.com/services/mandrel-formed-hoses');
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