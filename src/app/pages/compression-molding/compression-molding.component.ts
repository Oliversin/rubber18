import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { CommonModule } from '@angular/common';
import { SwiperinoSliderComponent } from '../../shared/components/swiperino-slider/swiperino-slider.component';


@Component({
  selector: 'app-compression-molding',
  standalone: true,
  imports: [SwiperinoSliderComponent, RouterLink],
  providers: [GlobalVars],
  templateUrl: './compression-molding.component.html',
  styleUrl: './compression-molding.component.css'
})
export default class CompressionMoldingComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Compression Molding - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Our compression molding service uses heat and pressure to create precise, complex rubber parts in high volumes. Perfect for producing durable components like seals and gaskets with consistent quality.');
    this.addMetaTag('keywords', 'Mold Making, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Compression Molding - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Our compression molding service uses heat and pressure to create precise, complex rubber parts in high volumes. Perfect for producing durable components like seals and gaskets with consistent quality.', 'property');
    this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Compression Molding - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Our compression molding service uses heat and pressure to create precise, complex rubber parts in high volumes. Perfect for producing durable components like seals and gaskets with consistent quality.');
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
