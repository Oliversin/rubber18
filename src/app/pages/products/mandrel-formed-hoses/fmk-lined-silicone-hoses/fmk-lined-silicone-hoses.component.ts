import { afterNextRender, Component } from '@angular/core';
import { ProductDetailsComponent } from '../../../../shared/components/product-details/product-details.component';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../../../global-vars';

@Component({
  selector: 'app-fmk-lined-silicone-hoses',
  standalone: true,
  imports: [ProductDetailsComponent],
  providers:[GlobalVars],
  templateUrl: './fmk-lined-silicone-hoses.component.html',
  styleUrl: './fmk-lined-silicone-hoses.component.css'
})
export default class FmkLinedSiliconeHosesComponent {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) {
      afterNextRender(() => {
          // Safe to check `scrollHeight` because this will only run in the browser, not the server.
          this.addCanonicalTag('https://rubber-mexico.com/mandrel-formed-hoses/products/fmk-lined-silicone-hoses');
        });
     }
  
    ngOnInit(): void {
      this.setMetaTags();
    }
  
    private setMetaTags() {
      this.titleService.setTitle('FMK Lined Silicone Hoses - Rubber-Mexico');
  
      // Standard Meta Tags
      this.addMetaTag('description', 'Premium FMK lined silicone hoses offering exceptional resistance to high temperatures and chemicals. Perfect for demanding environments, ensuring durability and long-lasting performance.');
      this.addMetaTag('keywords', 'FMK Lined Silicone Hoses, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding');
  
      // Open Graph Meta Tags
      this.addMetaTag('og:title', 'FMK Lined Silicone Hoses - Rubber-Mexico', 'property');
      this.addMetaTag('og:description', 'Premium FMK lined silicone hoses offering exceptional resistance to high temperatures and chemicals. Perfect for demanding environments, ensuring durability and long-lasting performance.', 'property');
      this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');
  
      // Twitter Card Tags
      this.addMetaTag('twitter:card', 'summary_large_image');
      this.addMetaTag('twitter:title', 'FMK Lined Silicone Hoses - Rubber-Mexico');
      this.addMetaTag('twitter:description', 'Premium FMK lined silicone hoses offering exceptional resistance to high temperatures and chemicals. Perfect for demanding environments, ensuring durability and long-lasting performance.');
      this.addMetaTag('twitter:image', '/assets/services/rubberMoldingv2.png');
  
      // Robots Meta Tag
      this.addMetaTag('robots', 'index, follow');
      // Canonical Tag
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
