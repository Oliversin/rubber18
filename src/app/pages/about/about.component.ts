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
    this.titleService.setTitle('About Us - Your Angular App');
    this.meta.updateTag({ name: 'description', content: 'Learn more about us at Your Angular App.' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, About Us, Company' });
    this.meta.updateTag({ property: 'og:title', content: 'About Us - Your Angular App' });
    this.meta.updateTag({ property: 'og:description', content: 'Learn more about us at Your Angular App.' });
    this.meta.updateTag({ property: 'og:image', content: 'path/to/about-image.png' });
  }
}
