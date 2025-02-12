import { AfterViewInit, Component, Input, CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { CommonModule } from '@angular/common';
import { SwiperinoSliderComponent } from '../../shared/components/swiperino-slider/swiperino-slider.component';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent, CommonModule,SwiperinoSliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[GlobalVars],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export default class QualityComponent implements AfterViewInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }
  
  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Quality Assurance - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'At Rubber-Mexico, we ensure precision and reliability through advanced testing with rheometers, Keyence visual inspection, and more. We provide high-quality rubber extrusion for automotive, medical, and custom parts');
    this.addMetaTag('keywords', 'Rubber extrusion service, Custom rubber extrusion, Rubber seals and gaskets, Rubber hoses and tubing, Extruded rubber profiles, Precision rubber extrusion, Rubber manufacturing, Automotive rubber parts, Medical rubber components, Rubber extrusion Mexico and extrusion, Custom rubber shapes');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Quality Assurance - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'At Rubber-Mexico, we ensure precision and reliability through advanced testing with rheometers, Keyence visual inspection, and more. We provide high-quality rubber extrusion for automotive, medical, and custom parts', 'property');
    this.addMetaTag('og:image', '/assets/quality/keyence-gallery2.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Quality Assurance - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'At Rubber-Mexico, we ensure precision and reliability through advanced testing with rheometers, Keyence visual inspection, and more. We provide high-quality rubber extrusion for automotive, medical, and custom parts');
    this.addMetaTag('twitter:image', '/assets/quality/keyence-gallery2.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    // Canonical Tag
    this.addCanonicalTag('https://rubber-mexico.com/quality-assurance');
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

  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');

    const swiper = new Swiper('swiper-container', {
      observer: true,
      observeParents: true,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      grabCursor: true,
      autoplay: {
        delay: 3000, // Adjust the delay as needed
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      slideToClickedSlide: false,
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 3
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 2
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });

    


  }
}
