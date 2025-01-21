import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgClass} from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


@Component({
  selector: 'app-faq',
  standalone: true,
  providers:[GlobalVars],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgClass, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export default class FaqComponent implements OnInit{
  
  slides = ['iso9k1.webp', '5S.webp', 'AMEF.webp', 'ppap.webp'];
  
  constructor(private meta: Meta, private titleService: Title, public vars:GlobalVars) {
    this.faqs = [

      { question: 'What is the minimum order amount?', 
        isActive: false,
        answer: 'We are setup to service every project from one off projects to full scale production!' 
  
      },
      { question: 'Which countries do you ship to?', 
        isActive: false,
        answer: 'We have trucks crossing into the USA every single day with warehouses on the West Coast, East Coast, and even in Mexico! We are located within a few miles of the port of Ensenada and within a few hours from the Port of Long Beach and can ship product worldwide.' 
  
      },
      { question: 'Are you ISO 9001 certified?', 
        isActive: false,
        answer: 'Yes, we are ISO 9001 certified!' 
  
      },
      { question: 'What’s the biggest part you can run?', 
        isActive: false,
        answer: 'our largest press is 800T and can mold parts up to 102" x 72" ' 
  
      },
      { question: 'Do you require MOQs?', 
        isActive: false,
        answer: 'Yes, we do require MOQs. It all depends on the customer and project' 
  
      },
      { question: 'Can you make coolers?', 
        isActive: false,
        answer: 'Unfortunately at this time we are not in the market to manufacture coolers' 
  
      },
    ];
   }

   ngOnInit(): void {
    this.titleService.setTitle('Frequently Asked Questions - Rubber-Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Find answers to the most frequently asked questions about Rubber-Mexico and our services. Get the information you need to make informed decisions.');
    this.addMetaTag('keywords', 'FAQ, Frequently Asked Questions, Rubber-Mexico, Customer Support, Rotational Molding');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Frequently Asked Questions - Rubber-Mexico', 'property');
    this.addMetaTag('og:description', 'Find answers to the most frequently asked questions about Rubber-Mexico and our services. Get the information you need to make informed decisions.', 'property');
    this.addMetaTag('og:image', '/assets/faqImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Frequently Asked Questions - Rubber-Mexico');
    this.addMetaTag('twitter:description', 'Find answers to the most frequently asked questions about Rubber-Mexico and our services. Get the information you need to make informed decisions.');
    this.addMetaTag('twitter:image', '/assets/faqImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
  }

  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
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
