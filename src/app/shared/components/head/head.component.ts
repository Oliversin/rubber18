import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  isMenuHidden = true;

  navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'About', link: '/about' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Contact', link: '/contact' }
  ];


  

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
    console.log("el pepe");
  }
  
}
