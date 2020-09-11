import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {SwiperOptions} from 'swiper';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SwiperComponent } from 'ngx-useful-swiper';


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {
  sliders: {
    image_url: string;
    slider_text_title: string;
    slider_text: string;
  }[];
  @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;


  constructor(http: HttpClient) {
      http.get('https://ccom-api.herokuapp.com/slider')
        .subscribe((response:{
          image_url: string;
          slider_text_title: string;
          slider_text: string;
        }[]) =>{
         this.sliders = response

        })
  }

  config: SwiperOptions = {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

  nextSlide(){

    this.usefulSwiper.swiper.slideNext()
    console.log(this.usefulSwiper)

  }
  previousSlide() {
    // this.usefulSwiper. swiper.slidePrev();


  }

  ngOnInit(): void {
  }
  ngAfter

}
