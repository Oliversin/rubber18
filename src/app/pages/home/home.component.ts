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
    this.titleService.setTitle('RotomoldMexico - Home');

    // Standard Meta Tags
    this.addMetaTag('description', 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call.');
    this.addMetaTag('keywords', 'Rotational Molding, Rotomold Mexico, Mold Making, Foam Insulation, Shipping, Stocking, Compression Molding, Extrusion, Rapid Prototyping, Quality Manufacturing');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'RotomoldMexico - Home', 'property');
    this.addMetaTag('og:description', 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call.', 'property');
    this.addMetaTag('og:image', '/assets/logoHeader.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'RotomoldMexico - Home');
    this.addMetaTag('twitter:description', 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call.');
    this.addMetaTag('twitter:image', '/assets/logoHeader.png'); // Update with the correct image path

     // Robots Meta Tag
     this.addMetaTag('robots', 'index, follow');

     // Canonical Meta Tag
     this.addMetaTag('canonical', 'https://www.rotomoldmexico.com'); // Replace with the correct canonical URL
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }

  
}
