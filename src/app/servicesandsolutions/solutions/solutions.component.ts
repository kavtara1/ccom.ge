import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
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
  ngOnInit(): void {
  }

}
