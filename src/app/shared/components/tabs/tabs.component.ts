import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GlobalVars } from '../../../global-vars';
import { BackToServicesComponent } from '../../back-to-services/back-to-services.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent, CommonModule],
  providers:[GlobalVars],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  constructor(private meta: Meta, private titleService: Title, protected vars: GlobalVars) { }

  
    activeTab: number = 0;
  
    tabs = [
      { label: 'Compression molding', 
        content: 
          `<ul class="list-disc list-inside"> 
            <li>
            We have traditional compression molding machines as well as vacuum 3RT compression molding machines. 
            We have small multilevel presses for laboratory runs, prototypes, and low volume production. 
            We have the top of the line vacuum 3RT presses for our medium to high volume production for parts up to 28" x 28" (700mm x 700m). 
            These machines use vacuum to help eliminate trapped air, and the 3RT system with a shuttle helps automate the process. 
            Complex parts can be molded using these machines using 4+ plates without needing the operators to handle the molds. 
            We also have larger presses that we use for large seals, windows trim seals, floor mats and other large molded parts. 
            Our largest press is 102" x 72" in size and 800T. 
            Our equipment has large daylight so we are also able to use multilevel molds to further maximize output for larger parts.
            </li>
            <li>
              We compound nearly all of our rubber in house and have automated preforming techniques to streamline the process, minimize scrap, minimize flash and maximize the precision of our compression molded parts. 
              We have automated barwell style preformer extruders that can produce accurate weight and shape preforms up to 100+ per minute. 
            </li>
          </ul>` 
      },
      { label: 'Transfer molding', 
        content: 
          ``
      },
    ];
  
    showTab(tab: any): void {
      this.activeTab = tab;
    }

}
