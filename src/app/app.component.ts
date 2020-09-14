import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ccom';
  show: any = false;
  year: number = new Date().getFullYear();
  ShowOverlay: boolean = false;
  constructor() {
  }
  overlayClose(){
    this.ShowOverlay = false
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 1500);
  }
}
