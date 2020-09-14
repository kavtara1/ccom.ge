import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper from 'swiper';
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
  }

  swiperfunc() {
    this.swiper = new Swiper(this.slidesContainer.nativeElement, {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
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
        }
      }

    });

  }

  ngAfterViewInit() {
    this.swiperfunc();
    setTimeout(() => this.swiperfunc(), 1000);
  }

  ngOnInit(): void {
  }

}
