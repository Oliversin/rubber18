import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.css'
})
export class HorizontalCardComponent {
  @Input() title: string = 'Build Your New Idea';
  @Input() description: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.';
  @Input() imageUrl: string = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
  //@Input() buttonText: string = 'Start Now';
  //@Input() buttonLink: string = '#';
  @Input() link: string = '#';
  @Input() learnText: string = 'Learn more';

  @Input() fragment: string = '';
}
