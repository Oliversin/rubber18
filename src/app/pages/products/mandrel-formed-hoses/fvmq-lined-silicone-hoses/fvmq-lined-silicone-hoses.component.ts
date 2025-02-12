import { afterNextRender, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../../../global-vars';
import { ProductDetailsComponent } from '../../../../shared/components/product-details/product-details.component';

@Component({
  selector: 'app-fvmq-lined-silicone-hoses',
  standalone: true,
  imports: [ProductDetailsComponent],
  providers:[GlobalVars],
  templateUrl: './fvmq-lined-silicone-hoses.component.html',
  styleUrl: './fvmq-lined-silicone-hoses.component.css'
})
export default class FvmqLinedSiliconeHosesComponent {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) {
      afterNextRender(() => {
          // Safe to check `scrollHeight` because this will only run in the browser, not the server.
          this.addCanonicalTag('https://rubber-mexico.com/mandrel-formed-hoses/products/fvmq-lined-silicone-hoses');
        });
     }
  
    ngOnInit(): void {
      this.setMetaTags();
    }
  
    private setMetaTags() {
      this.titleService.setTitle('FVMQ Lined Silicone Hoses - Rubber-Mexico');
      
      // Standard Meta Tags
      this.addMetaTag('description', 'Durable and flexible FVMQ lined silicone hoses designed for high-performance applications. Ideal for resisting extreme temperatures and chemicals, providing superior reliability and longevity');
      this.addMetaTag('keywords', 'FVMQ Lined Silicone Hoses, Rotational Molding, Custom Molds, Rubber-Mexico, Quality Manufacturing, Plastic Molding');
  
      // Open Graph Meta Tags
      this.addMetaTag('og:title', 'FVMQ Lined Silicone Hoses - Rubber-Mexico', 'property');
      this.addMetaTag('og:description', 'Durable and flexible FVMQ lined silicone hoses designed for high-performance applications. Ideal for resisting extreme temperatures and chemicals, providing superior reliability and longevity', 'property');
      this.addMetaTag('og:image', '/assets/services/rubberMoldingv2.png', 'property');
  
      // Twitter Card Tags
      this.addMetaTag('twitter:card', 'summary_large_image');
      this.addMetaTag('twitter:title', 'FVMQ Lined Silicone Hoses - Rubber-Mexico');
      this.addMetaTag('twitter:description', 'Durable and flexible FVMQ lined silicone hoses designed for high-performance applications. Ideal for resisting extreme temperatures and chemicals, providing superior reliability and longevity');
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
