import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerSlider: {
    customer_name: string;
    customer_image: string;
  }[];
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/customersslider')
      .subscribe((response:{
        customer_name: string;
        customer_image: string;
      }[]) =>{
        this.customerSlider = response

      })
  }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    // nav: true
  }

}
