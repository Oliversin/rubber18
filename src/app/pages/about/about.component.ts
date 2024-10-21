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
export default class AboutComponent implements OnInit{
  constructor(private meta: Meta, private titleService: Title, protected vars:GlobalVars) { }

  ngOnInit(): void {
    this.titleService.setTitle('About Us - Rotomold Mexico');
    this.meta.updateTag({ name: 'description', content: 'Rotomold Mexico, a family-owned leader in advanced manufacturing, operates a vertically integrated facility in Ensenada, Mexico.' });
    this.meta.updateTag({ name: 'keywords', content: 'rotomold, rotomolding, About Us, Company' });
    this.meta.updateTag({ property: 'og:title', content: 'About Us - Rototmold Mexico' });
    this.meta.updateTag({ property: 'og:description', content: 'Rotomold Mexico, a family-owned leader in advanced manufacturing, operates a vertically integrated facility in Ensenada, Mexico.' });
    this.meta.updateTag({ property: 'og:url', content: 'http://localhost:4200/about' });
    this.meta.updateTag({ property: 'og:image', href: '/assets/familyBusiness.png' });
    
    
  }
}
