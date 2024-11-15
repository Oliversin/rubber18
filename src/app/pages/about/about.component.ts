import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { VisitUsComponent } from '../../shared/components/visit-us/visit-us.component';
import { RouterLink } from '@angular/router';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-about',
  standalone: true,
  providers:[GlobalVars],
  imports: [VisitUsComponent,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.titleService.setTitle('About Us - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Know about us: Rubber-Mexico, a family-owned leader in advanced manufacturing, operates a vertically integrated facility in Ensenada, Mexico.');
    this.addMetaTag('keywords', 'About Us, Rubber-Mexico, Company History, Rotational Molding, Quality Manufacturing');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'About Us - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Know about us: Rubber-Mexico, a family-owned leader in advanced manufacturing, operates a vertically integrated facility in Ensenada, Mexico.', 'property');
    this.addMetaTag('og:image', '/assets/aboutImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'About Us - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Know about us: Rubber-Mexico, a family-owned leader in advanced manufacturing, operates a vertically integrated facility in Ensenada, Mexico.');
    this.addMetaTag('twitter:image', '/assets/aboutImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
  }
}
