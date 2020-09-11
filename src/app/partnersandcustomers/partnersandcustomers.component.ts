import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-partnersandcustomers',
  templateUrl: './partnersandcustomers.component.html',
  styleUrls: ['./partnersandcustomers.component.css']
})
export class PartnersandcustomersComponent implements OnInit {
  partnersAndCustomers: {
    title: string;
    description: string;
  }[];
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/partnersandcustomers')
      .subscribe((response:{
        title: string;
        description: string;
      }[]) =>{
        this.partnersAndCustomers = response

      })
  }

  ngOnInit(): void {

  }

}
