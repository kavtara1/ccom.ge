import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})

export class SolutionsComponent implements OnInit, AfterViewInit {
  solution: {
    title: string;
    description: string;
    image: string;
  }[];

  constructor(http: HttpClient) {
    http.get('https://ccom-api.herokuapp.com/solutions')
      .subscribe((response:{
        title: string;
        description: string;
        image: string;
      }[]) =>{
        this.solution = response

      })
  }
  getTexts(){
    let texts = document.getElementsByClassName("solution-text")
    for (let i =0; i <= texts.length; i ++){
      console.log(texts[i])

    }
  }
  ngAfterViewInit() {
    this.getTexts()
    setTimeout(()=> this.getTexts(), 1500)
  }



  ngOnInit(): void {

  }



}
