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
  burger: boolean = false;

  constructor() {

  }

  overlayOpen(){

    if (this.ShowOverlay == false){
      this.ShowOverlay = true
      this.burger = true
      let body = document.querySelector('body').classList.add("body")
    }

    else  {
      this.ShowOverlay = false
      this.burger = false
      let body = document.querySelector('body').classList.remove("body")
    }
  }
  overlayClose(){
    this.ShowOverlay = false
    this.burger = false
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 1500);
  }
}
