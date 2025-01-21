import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { CommonModule } from '@angular/common';
import { SwiperinoSliderComponent } from '../../shared/components/swiperino-slider/swiperino-slider.component';


@Component({
  selector: 'app-more-molding-processes',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent, CommonModule,SwiperinoSliderComponent],
  providers:[GlobalVars],
  templateUrl: './more-molding-processes.component.html',
  styleUrl: './more-molding-processes.component.css'
})
export default class MoreMoldingProcessesComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  activeTab: number = 0;

  tabs = [
    { label: 'Compression molding', 
      content: 
        `` 
    },
    { label: 'Transfer molding', 
      content: 
        ``
    },
  ];

  showTab(tab: any): void {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('More Molding Processes - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Explore our advanced molding services, including Compression Molding and Transfer Molding. Our precision-driven processes deliver high-quality, durable parts with exceptional consistency. Whether you need complex, high-volume production or custom solutions, we provide efficient and reliable molding techniques tailored to meet your needs.');
    this.addMetaTag('keywords', 'Mold Making, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'More Molding Processes - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Explore our advanced molding services, including Compression Molding and Transfer Molding. Our precision-driven processes deliver high-quality, durable parts with exceptional consistency. Whether you need complex, high-volume production or custom solutions, we provide efficient and reliable molding techniques tailored to meet your needs.', 'property');
    this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'More Molding Processes - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Explore our advanced molding services, including Compression Molding and Transfer Molding. Our precision-driven processes deliver high-quality, durable parts with exceptional consistency. Whether you need complex, high-volume production or custom solutions, we provide efficient and reliable molding techniques tailored to meet your needs.');
    this.addMetaTag('twitter:image', '/assets/services/rubberMoldingv2.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }
}
