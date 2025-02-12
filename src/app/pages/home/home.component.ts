import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { Meta, Title } from '@angular/platform-browser';
import { PartnersTrustComponent } from '../../shared/components/partners-trust/partners-trust.component';
import { GlobalVars } from '../../global-vars';
import { HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent } from '@spartan-ng/ui-carousel-helm';
import { HorizontalCardComponent } from '../../shared/components/horizontal-card/horizontal-card.component';
import { FormContactComponent } from "../../shared/components/form-contact/form-contact.component";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GalleryComponent, HorizontalCardComponent, FormContactComponent, PartnersTrustComponent, HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent, FormContactComponent],
  providers: [GlobalVars],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit{
  constructor(private meta: Meta, private titleService: Title, protected vars:GlobalVars) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Rubber-Mexico - Elite Rubbers of the North: Where Quality Meets Strength');

    // Standard Meta Tags
    this.addMetaTag('description', 'Rubber Mexico provides top-tier, vertically integrated rubber manufacturing in Ensenada, MX. Specializing in rubber compounding, compression molding, and extrusion, we deliver high-quality, customized solutions to meet all your rubber needs.');
    this.addMetaTag('keywords', 'rubber products Mexico, industrial rubber Mexico, rubber suppliers Mexico, rubber manufacturing Mexico, custom rubber Mexico, rubber seals Mexico, rubber gaskets Mexico, rubber hoses Mexico, rubber export Mexico, rubber components Mexico, Mexican rubber manufacturers, rubber parts Mexico, high-quality rubber Mexico, rubber for automotive Mexico, rubber products wholesale Mexico, rubber manufacturing companies Mexico, rubber supply chain Mexico, latex rubber Mexico, silicone rubber Mexico, rubber for construction Mexico');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Rubber-Mexico - Elite Rubbers of the North: Where Quality Meets Strength', 'property');
    this.addMetaTag('og:description', 'Rubber Mexico provides top-tier, vertically integrated rubber manufacturing in Ensenada, MX. Specializing in rubber compounding, compression molding, and extrusion, we deliver high-quality, customized solutions to meet all your rubber needs.', 'property');
    this.addMetaTag('og:image', '/assets/logoHeader.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Rubber-Mexico - Elite Rubbers of the North: Where Quality Meets Strength');
    this.addMetaTag('twitter:description', 'Rubber Mexico provides top-tier, vertically integrated rubber manufacturing in Ensenada, MX. Specializing in rubber compounding, compression molding, and extrusion, we deliver high-quality, customized solutions to meet all your rubber needs.');
    this.addMetaTag('twitter:image', '/assets/logoHeader.png'); // Update with the correct image path

     // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    // Canonical Tag
    this.addCanonicalTag('https://rubber-mexico.com/home');
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
