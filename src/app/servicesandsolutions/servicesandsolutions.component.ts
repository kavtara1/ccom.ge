import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-servicesandsolutions',
  templateUrl: './servicesandsolutions.component.html',
  styleUrls: ['./servicesandsolutions.component.css']
})
export class ServicesandsolutionsComponent implements OnInit {
  servAndSolu: {
    title: string;
    description: string;

  }[];
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/servicesandsolution')
      .subscribe((response:{
        title: string;
        description: string;
      }[]) =>{
        this.servAndSolu = response

      })
  }

  ngOnInit(): void {
  }

}
