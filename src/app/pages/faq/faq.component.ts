import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent {
  isOpen = false;
  openIndex: number | null = null; // Track which FAQ is open

  faqs = [
    { question: 'What Rotomolding Manufacturing Processes do you have?', 
      isActive: true,
      answer: 'We have over 250,000ft2 of manufacturing space in Baja California, Mexico with many capabilities. We have 6 rotomolding machines that vary from 1.9 meter oven diamaters to 4.5 meteres.' 
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
  ];



  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log("el pepe");
  }

  toggleAccordion(index: number) {
    this.faqs[index].isActive = !this.faqs[index].isActive;
  }

}
