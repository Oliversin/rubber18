import { Component, OnInit } from '@angular/core';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-post-processing',
  standalone: true,
  imports: [BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './post-processing.component.html',
  styleUrl: './post-processing.component.css'
})
export default class PostProcessingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Post Processing Services - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Enhance your products with our comprehensive post processing services at Rotomold Mexico. We specialize in finishing and assembly to meet your specific needs.');
    this.addMetaTag('keywords', 'Post Processing, Finishing Services, Assembly, Rotomold Mexico, Quality Manufacturing');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Post Processing Services - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Enhance your products with our comprehensive post processing services at Rotomold Mexico. We specialize in finishing and assembly to meet your specific needs.', 'property');
    this.addMetaTag('og:image', '/assets/postProcessingImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Post Processing Services - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Enhance your products with our comprehensive post processing services at Rotomold Mexico. We specialize in finishing and assembly to meet your specific needs.');
    this.addMetaTag('twitter:image', '/assets/postProcessingImage.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }
}
