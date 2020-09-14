import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: {
    image_url: string;
    text: string;
  }[];
  links: {
    link: string;
  }[];
  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/about')
      .subscribe((response:{
          image_url: string;
          text: string;
      }[]) =>{
        this.about = response
      })
    http.get('https://ccom-api.herokuapp.com/links')
      .subscribe((response:{
        link: string;
      }[]) =>{
        this.links = response
      })


  }
  scrollToSolution(){
    let solutions = document.getElementById("solutions")
    solutions.scrollIntoView()
  }
  timeOutFunction(){
    setTimeout(()=> this.scrollToSolution(), 300)
  }



  ngOnInit(): void {
  }

}
