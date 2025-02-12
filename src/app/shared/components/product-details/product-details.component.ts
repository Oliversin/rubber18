import { CommonModule } from '@angular/common';
import { Component, afterNextRender, Input } from '@angular/core';
import { GlobalVars } from '../../../global-vars';
import { FormContactComponent } from '../form-contact/form-contact.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormContactComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor( public vars:GlobalVars) {
    afterNextRender(() => {
      
    });
  }

  @Input() images: string[] = [];  // Array of image paths passed from the parent
  @Input() features: string[] = [];  // Array of features paths passed from the parent
  @Input() colors: string[] = [];  // Array of colors paths passed from the parent

  @Input() name: string = '';
  @Input() sku: string = '';
  @Input() description: string = '';

  mainImage: string = this.images[0];
  quantity: number = 1;
  product = {
    name: this.name,
    sku: this.sku,
    description: this.description,
    features: this.features
  };

  ngOnInit(): void {
    // Ensure that images are passed and assign the first image to mainImage
    if (this.images && this.images.length > 0) {
      this.mainImage = this.images[0];
    }
  }

  changeImage(src: string): void {
    this.mainImage = src;
  }

}
