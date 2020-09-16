import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.css']
})
export class ServicesItemComponent implements OnInit {
  @Input()item;
  showFullText = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleReadMore() {
    this.showFullText = true

  }

}
