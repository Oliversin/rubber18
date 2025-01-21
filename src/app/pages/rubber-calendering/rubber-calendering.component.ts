import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';

@Component({
  selector: 'app-rubber-calendering',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './rubber-calendering.component.html',
  styleUrl: './rubber-calendering.component.css'
})
export default class RubberCalenderingComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }
  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags() {
    this.titleService.setTitle('Rubber Calendering Services - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Rubber-Mexico provides expert rubber Calendering services, delivering high-performance, custom rubber sheets and films for industries like automotive, medical, and manufacturing. We ensure precision, quality, and tailored solutions to meet the unique needs of each project.');
    this.addMetaTag('keywords', 'Rubber Calendering service, Custom rubber sheets, Rubber films, Rubber Calendering solutions, Precision rubber Calendering, Automotive rubber products, Medical rubber sheets, Rubber manufacturing Mexico, Custom rubber production, High-quality rubber sheets, Rubber Calendering for industry');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Rubber Calendering Services - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Rubber-Mexico provides expert rubber Calendering services, delivering high-performance, custom rubber sheets and films for industries like automotive, medical, and manufacturing. We ensure precision, quality, and tailored solutions to meet the unique needs of each project.');
    this.addMetaTag('og:image', '/assets/services/rubber-calendering.png', 'property');

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Rubber Calendering Services - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Rubber-Mexico provides expert rubber Calendering services, delivering high-performance, custom rubber sheets and films for industries like automotive, medical, and manufacturing. We ensure precision, quality, and tailored solutions to meet the unique needs of each project.');
    this.addMetaTag('twitter:image', '/assets/services/rubber-calendering.png');

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    // Remove existing tag if present
    this.meta.removeTag(`${type}='${name}'`);
    this.meta.addTag({ [type]: name, content });
  }

}