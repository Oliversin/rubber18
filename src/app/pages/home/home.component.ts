import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { Meta, Title } from '@angular/platform-browser';
import { PartnersTrustComponent } from '../../shared/components/partners-trust/partners-trust.component';
import { GlobalVars } from '../../global-vars';
import { HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent } from '@spartan-ng/ui-carousel-helm';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,GalleryComponent,PartnersTrustComponent, HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent],
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
    this.titleService.setTitle('Rubber-Mexico - Home');

    // Standard Meta Tags
    this.addMetaTag('description', 'Rubber Mexico provides top-tier, vertically integrated rubber manufacturing in Ensenada, MX. Specializing in rubber compounding, compression molding, and extrusion, we deliver high-quality, customized solutions to meet all your rubber needs.');
    this.addMetaTag('keywords', 'rubber products Mexico, industrial rubber Mexico, rubber suppliers Mexico, rubber manufacturing Mexico, custom rubber Mexico, rubber seals Mexico, rubber gaskets Mexico, rubber hoses Mexico, rubber export Mexico, rubber components Mexico, Mexican rubber manufacturers, rubber parts Mexico, high-quality rubber Mexico, rubber for automotive Mexico, rubber products wholesale Mexico, rubber manufacturing companies Mexico, rubber supply chain Mexico, latex rubber Mexico, silicone rubber Mexico, rubber for construction Mexico');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Rubber-Mexico - Home', 'property');
    this.addMetaTag('og:description', 'Rubber Mexico provides top-tier, vertically integrated rubber manufacturing in Ensenada, MX. Specializing in rubber compounding, compression molding, and extrusion, we deliver high-quality, customized solutions to meet all your rubber needs.', 'property');
    this.addMetaTag('og:image', '/assets/logoHeader.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Rubber-Mexico - Home');
    this.addMetaTag('twitter:description', 'Rubber Mexico provides top-tier, vertically integrated rubber manufacturing in Ensenada, MX. Specializing in rubber compounding, compression molding, and extrusion, we deliver high-quality, customized solutions to meet all your rubber needs.');
    this.addMetaTag('twitter:image', '/assets/logoHeader.png'); // Update with the correct image path

     // Robots Meta Tag
     this.addMetaTag('robots', 'index, follow');

     // Canonical Meta Tag
     this.addMetaTag('canonical', 'https://www.rubber-mexico.com'); // Replace with the correct canonical URL
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }

  
}
