import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swiper, {Autoplay} from 'swiper';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  partnersSlider: {
    partner_name: string;
    partner_image: string;
  }[];
  swiper: Swiper;
  @ViewChild('slidesContainer', {read: ElementRef, static: false})
  slidesContainer: ElementRef;
  ngAfter;
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/partnersslider')
      .subscribe((response:{
        partner_name: string;
        partner_image: string;
      }[]) =>{
        this.partnersSlider = response

      })
    Swiper.use([Autoplay])
  }

  swiperfunc(){
    this.swiper = new Swiper(this.slidesContainer.nativeElement, {
      loop: true,
      // slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1000: {
          loop: true,
          centeredSlides: false,
          slidesPerView: 5,
          spaceBetween: 40,
          autoplay: {
            delay:3000,
            disableOnInteraction: true
          }
        },

      }

    });

  }
  next() {
    this.swiper.slideNext();

  }

  prev() {
    this.swiper.slidePrev();

  }

  ngAfterViewInit() {
    this.swiperfunc()
    setTimeout(()=> this.swiperfunc(), 1000)
  }

  ngOnInit(): void {
  }

}

