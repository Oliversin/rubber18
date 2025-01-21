
import { AfterViewInit, Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiperino-slider',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiperino-slider.component.html',
  styleUrl: './swiperino-slider.component.css'
})
export class SwiperinoSliderComponent implements AfterViewInit {

  @Input() images: string[] = [];  // Array of image paths passed from the parent
  @Input() effect: string = 'coverflow'; 

  slidesPerView = 3;
  breakpoints = {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    
    
  };

  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');

    const swiper = new Swiper('swiper-container', {
      observer: true,
      observeParents: true,
      centeredSlides: true,
      effect: this.effect,
      loop: true,
      spaceBetween: 10,
      grabCursor: true,
      autoplay: {
        delay: 3000, // Adjust the delay as needed
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      slideToClickedSlide: false,
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 3
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 2
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });

    


  }
}
