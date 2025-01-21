import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalVars } from '../../../global-vars';

@Component({
  selector: 'app-head',
  standalone: true,
  providers:[GlobalVars],
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  constructor(protected vars:GlobalVars) { }
  isMenuHidden = true;



  ////Nav items moved from this component to globar vars
  navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'About', link: '/about' },
    { label: 'Quality', link: '/quality' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Contact', link: '/contact' },
    
  ];


  

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
    console.log("el pepe");
  }
  
}
