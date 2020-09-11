import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OwlOptions} from 'ngx-owl-carousel-o';

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
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/partnersslider')
      .subscribe((response:{
        partner_name: string;
        partner_image: string;
      }[]) =>{
        this.partnersSlider = response

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
    // navText: ['', ''],
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
        items: 5
      }
    },
    // nav: true
  }

}
