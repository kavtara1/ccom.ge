import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: {
    city_country: string;
    street_address: string;
    phone_number: string;
    email: string;
    first_sub_text: string;
    second_sub_text: string;

  }[];
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/address')
      .subscribe((response:{
        city_country: string;
        street_address: string;
        phone_number: string;
        email: string;
        first_sub_text: string;
        second_sub_text: string;
      }[]) =>{
        this.contact = response

      })
  }
  


  ngOnInit(): void {
    
  }

}
