import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-rotational-molding',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './rotational-molding.component.html',
  styleUrl: './rotational-molding.component.css'
})
export default class RotationalMoldingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  ngOnInit(): void {
    this.titleService.setTitle('Rotational Molding Services - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Discover our expert rotational molding services at Rotomold Mexico. With over 50 years of experience, we specialize in custom solutions for various industries.');
    this.addMetaTag('keywords', 'Rotational Molding, Custom Molding, Plastic Manufacturing, Rotomold Mexico, Quality Production');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Rotational Molding Services - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Discover our expert rotational molding services at Rotomold Mexico. With over 50 years of experience, we specialize in custom solutions for various industries.', 'property');
    this.addMetaTag('og:image', '/assets/rotationalMoldingImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Rotational Molding Services - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Discover our expert rotational molding services at Rotomold Mexico. With over 50 years of experience, we specialize in custom solutions for various industries.');
    this.addMetaTag('twitter:image', '/assets/rotationalMoldingImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
  }
}
