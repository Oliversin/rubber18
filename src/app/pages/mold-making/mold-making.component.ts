import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BackToServicesComponent } from '../../shared/back-to-services/back-to-services.component';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-mold-making',
  standalone: true,
  imports: [BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './mold-making.component.html',
  styleUrl: './mold-making.component.css'
})

export default class MoldMakingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.titleService.setTitle('Mold Making Services - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Explore our specialized mold making services at Rotomold Mexico. With over 50 years of experience, we provide high-quality, custom molds for all your rotational molding needs.');
    this.addMetaTag('keywords', 'Mold Making, Rotational Molding, Custom Molds, Rotomold Mexico, Quality Manufacturing, Plastic Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Mold Making Services - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Explore our specialized mold making services at Rotomold Mexico. With over 50 years of experience, we provide high-quality, custom molds for all your rotational molding needs.', 'property');
    this.addMetaTag('og:image', '/assets/moldMakingImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Mold Making Services - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Explore our specialized mold making services at Rotomold Mexico. With over 50 years of experience, we provide high-quality, custom molds for all your rotational molding needs.');
    this.addMetaTag('twitter:image', '/assets/moldMakingImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
  }
}
