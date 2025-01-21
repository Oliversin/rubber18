import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalVars } from '../../../global-vars';

@Component({
  selector: 'app-headerv2',
  standalone: true,
  providers:[GlobalVars],
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './headerv2.component.html',
  styleUrl: './headerv2.component.css'
})
export class Headerv2Component {

  constructor(protected vars:GlobalVars) { }
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
