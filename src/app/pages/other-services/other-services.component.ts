import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-other-services',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.css'
})
export default class OtherServicesComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Mold Making Services - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Explore our specialized mold making services at Rubber-Mexico. With over 50 years of experience, we provide high-quality, custom molds for all your rotational molding needs.');
    this.addMetaTag('keywords', 'Mold Making, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Mold Making Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Explore our specialized mold making services at Rubber-Mexico. With over 50 years of experience, we provide high-quality, custom molds for all your rotational molding needs.', 'property');
    this.addMetaTag('og:image', '/assets/moldMakingImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Mold Making Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Explore our specialized mold making services at Rubber-Mexico. With over 50 years of experience, we provide high-quality, custom molds for all your rotational molding needs.');
    this.addMetaTag('twitter:image', '/assets/moldMakingImage.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }
}
