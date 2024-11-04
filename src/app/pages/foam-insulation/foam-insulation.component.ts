import { Component, OnInit } from '@angular/core';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-foam-insulation',
  standalone: true,
  imports: [BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './foam-insulation.component.html',
  styleUrl: './foam-insulation.component.css'
})
export default class FoamInsulationComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Foam Insulation Services - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Discover our high-quality foam insulation services at Rotomold Mexico. We provide effective insulation solutions for various applications, enhancing energy efficiency and comfort.');
    this.addMetaTag('keywords', 'Foam Insulation, Insulation Services, Energy Efficiency, Rotomold Mexico, Custom Solutions');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Foam Insulation Services - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Discover our high-quality foam insulation services at Rotomold Mexico. We provide effective insulation solutions for various applications, enhancing energy efficiency and comfort.', 'property');
    this.addMetaTag('og:image', '/assets/foamInsulationImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Foam Insulation Services - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Discover our high-quality foam insulation services at Rotomold Mexico. We provide effective insulation solutions for various applications, enhancing energy efficiency and comfort.');
    this.addMetaTag('twitter:image', '/assets/foamInsulationImage.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }
}
