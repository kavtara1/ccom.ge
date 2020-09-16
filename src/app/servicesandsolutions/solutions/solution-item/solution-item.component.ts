import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-solution-item',
  templateUrl: './solution-item.component.html',
  styleUrls: ['./solution-item.component.css']
})
export class SolutionItemComponent implements OnInit {
  @Input()item;
  showFullText = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleReadMore() {
    this.showFullText = true

  }

}
