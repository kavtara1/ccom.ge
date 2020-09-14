import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper from 'swiper';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit, AfterViewInit {
  sliders: {
    image_url: string;
    slider_text_title: string;
    slider_text: string;
  }[];
  swiper: Swiper;

  @ViewChild('slidesContainer', {read: ElementRef, static: false})
  slidesContainer: ElementRef;
  ngAfter;

  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/slider')
      .subscribe((response: {
        image_url: string;
        slider_text_title: string;
        slider_text: string;
      }[]) => {
        this.sliders = response;

      });
  }

  next() {
    this.swiper.slideNext();

  }

  prev() {
    this.swiper.slidePrev();

  }
  swiperfunc(){
    this.swiper = new Swiper(this.slidesContainer.nativeElement, {
      loop:true,
      spaceBetween: 30,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  }


  ngAfterViewInit() {

      this.swiperfunc()
    setTimeout(()=> this.swiperfunc(), 1500)
  }

  ngOnInit(): void {

  }

}
