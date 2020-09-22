import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper, {Autoplay} from 'swiper';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {
  customerSlider: {
    customer_name: string;
    customer_image: string;
  }[];
  swiper: Swiper;

  @ViewChild('slidesContainer', {read: ElementRef, static: false})
  slidesContainer: ElementRef;
  ngAfter;

  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/customersslider')
      .subscribe((response: {
        customer_name: string;
        customer_image: string;
      }[]) => {
        this.customerSlider = response;

      });
    Swiper.use([Autoplay])

  }

  swiperfunc() {

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
          spaceBetween: 20,
          autoplay: {
            delay:3000,
            disableOnInteraction: true
          }
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
    this.swiperfunc();
    setTimeout(() => this.swiperfunc(), 1000);
  }

  ngOnInit(): void {
  }

}
