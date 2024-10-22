import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-partners-trust',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './partners-trust.component.html',
  styleUrl: './partners-trust.component.css'
})
export class PartnersTrustComponent implements AfterViewInit {
  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];
  slido = {
    title: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'],
    src: ['https://swiperjs.com/demos/images/nature-1.jpg', 'https://swiperjs.com/demos/images/nature-2.jpg', 'https://swiperjs.com/demos/images/nature-3.jpg', 'https://swiperjs.com/demos/images/nature-4.jpg', 'https://swiperjs.com/demos/images/nature-5.jpg', 'https://swiperjs.com/demos/images/nature-6.jpg']
  }

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');

    const swiper = new Swiper('swiper-container', {
      observer: true,
      observeParents: true,
      centeredSlides: true,
      effect: "coverflow",
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