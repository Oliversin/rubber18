import { AfterViewInit, Component, Input, CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { CommonModule } from '@angular/common';
import { SwiperinoSliderComponent } from '../../shared/components/swiperino-slider/swiperino-slider.component';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent, CommonModule,SwiperinoSliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[GlobalVars],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export default class QualityComponent implements AfterViewInit {

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
