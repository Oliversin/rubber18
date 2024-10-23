import { Component, OnInit } from '@angular/core';
import { CardInputComponent } from '../../shared/components/card-input/card-input.component';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-engineers',
  standalone: true,
  imports: [CardInputComponent],
  providers:[GlobalVars],
  templateUrl: './engineers.component.html',
  styleUrl: './engineers.component.css'
})
export default class EngineersComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.titleService.setTitle('Our Engineers - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Meet the talented engineering team at Rotomold Mexico. With decades of experience in rotational molding, we deliver innovative solutions tailored to your needs.');
    this.addMetaTag('keywords', 'Engineers, Rotomold Mexico, Engineering Team, Rotational Molding, Custom Solutions');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Our Engineers - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Meet the talented engineering team at Rotomold Mexico. With decades of experience in rotational molding, we deliver innovative solutions tailored to your needs.', 'property');
    this.addMetaTag('og:image', '/assets/engineersImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Our Engineers - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Meet the talented engineering team at Rotomold Mexico. With decades of experience in rotational molding, we deliver innovative solutions tailored to your needs.');
    this.addMetaTag('twitter:image', '/assets/engineersImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
  }
}
