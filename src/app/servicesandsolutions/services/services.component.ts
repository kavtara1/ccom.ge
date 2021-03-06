import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit, AfterViewInit {
  services: {
    title: string;
    description: string;

  }[];
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/services')
      .subscribe((response:{
        title: string;
        description: string;
      }[]) =>{
        this.services = response

      })




  }
  ngAfterViewInit() {

    }


  ngOnInit(): void {

  }


}
