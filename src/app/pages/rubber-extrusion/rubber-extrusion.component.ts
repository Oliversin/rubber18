import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-rubber-extrusion',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './rubber-extrusion.component.html',
  styleUrl: './rubber-extrusion.component.css'
})
export default class RubberExtrusionComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Rubber Extrusion Services - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Discover high-quality rubber extrusion services at Rubber-Mexico. We specialize in producing custom rubber seals, gaskets, hoses, and profiles with precision and consistency for industries like automotive, construction, and medical devices');
    this.addMetaTag('keywords', 'Rubber extrusion service, Custom rubber extrusion, Rubber seals and gaskets, Rubber hoses and tubing, Extruded rubber profiles, Precision rubber extrusion, Rubber manufacturing, Automotive rubber parts, Medical rubber components, Rubber extrusion Mexico, Rubber molding and extrusion, Custom rubber shapes');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Rubber Extrusion Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Discover high-quality rubber extrusion services at Rubber-Mexico. We specialize in producing custom rubber seals, gaskets, hoses, and profiles with precision and consistency for industries like automotive, construction, and medical devices', 'property');
    this.addMetaTag('og:image', '/assets/shippingImage.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Rubber Extrusion Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Discover high-quality rubber extrusion services at Rubber-Mexico. We specialize in producing custom rubber seals, gaskets, hoses, and profiles with precision and consistency for industries like automotive, construction, and medical devices');
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

