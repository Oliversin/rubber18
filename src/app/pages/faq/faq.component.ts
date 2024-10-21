import { Component, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  providers:[GlobalVars],
  imports: [NgClass, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent implements OnInit{
  constructor(private meta: Meta, private titleService: Title, public vars:GlobalVars) {
    this.faqs = [
      { question: 'What Rotomolding Manufacturing Processes do you have?', 
        isActive: true,
        answer: 'We have over '+this.vars.ourSize+' of manufacturing space in Baja California, Mexico with many capabilities. We have '+this.vars.rotomoldingMachines+' that vary from 1.9 meter oven diamaters to 4.5 meteres.' 
      },
      { question: 'What is the minimum order amount?', 
        isActive: false,
        answer: 'We are setup to service every project from one off projects to full scale production!' 
  
      },
      { question: 'Which countries do you ship to?', 
        isActive: false,
        answer: 'We have trucks crossing into the USA every single day with warehouses on the West Coast, East Coast, and even in Canada! We are located within a few miles of the port of Ensenada and within a few hours from the Port of Long Beach and can ship product worldwide.' 
  
      },
      { question: 'Are you ISO 9001 certified?', 
        isActive: false,
        answer: 'Yes, we are ISO 9001 certified!' 
  
      },
      { question: 'What’s the biggest part you can run?', 
        isActive: false,
        answer: '12 long part. But depending on the project, different machines and arms can be used to accommodate your needs' 
  
      },
      { question: 'Are molds stored inside or outside?', 
        isActive: false,
        answer: 'Molds are stored inside and away from harsh weather' 
  
      },
      { question: 'Do you require MOQs?', 
        isActive: false,
        answer: 'Yes, we do require MOQs. It all depends on the customer and project' 
  
      },
      { question: 'Can you make coolers?', 
        isActive: false,
        answer: 'Unfortunately at this time we are not in the market to manufacture coolers' 
  
      },
      { question: 'Can you do full assemblies?', 
        isActive: false,
        answer: 'Assemblies will be considered depending on the customer and its requirements, but not something we specialize in.' 
  
      },
    ];
   }

  ngOnInit(): void {
    this.titleService.setTitle('Rotomold Mexico - FAQ');
    
    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call' });
    this.meta.addTag({ name: 'keywords', content: 'Rotational Molding, Rotomold Mexico, Mold Making, Foam Insulation, Shipping, Stocking, Compression Molding, Extrusion, Rapid Prototyping, Quality Manufacturing' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'RotomoldMexico - FAQ' });
    this.meta.addTag({ property: 'og:description', content: 'Rotomold Mexico, Family Owned with over 50 years of experience. 6 rotomolding machines with mold making capabilities. 3 distribution centers in the USA and plenty of capability to grow. Compound and pulverize in house. Request a quote or give us a call' });
    this.meta.addTag({ property: 'og:image', content: '/assets/logoHeader.png' });
  }

  isOpen = false;
  openIndex: number | null = null; // Track which FAQ is open

  faqs = [
    { question: 'What Rotomolding Manufacturing Processes do you have?', 
      isActive: true,
      answer: 'We have over of manufacturing space in Baja California, Mexico with many capabilities. We have 6 rotomolding machines that vary from 1.9 meter oven diamaters to 4.5 meteres.' 
    }
  ];



  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log("el pepe");
  }

  toggleAccordion(index: number) {
    this.faqs[index].isActive = !this.faqs[index].isActive;
  }

}
