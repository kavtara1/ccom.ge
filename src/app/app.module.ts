import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {MainSliderComponent} from './main-slider/main-slider.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {HttpClientModule} from '@angular/common/http';
import {AboutComponent} from './main-slider/about/about.component';
import { ServicesandsolutionsComponent } from './servicesandsolutions/servicesandsolutions.component';
import { ServicesComponent } from './servicesandsolutions/services/services.component';
import { SolutionsComponent } from './servicesandsolutions/solutions/solutions.component';
import { PartnersandcustomersComponent } from './partnersandcustomers/partnersandcustomers.component';
import { PartnersComponent } from './partnersandcustomers/partners/partners.component';
import { CustomersComponent } from './partnersandcustomers/customers/customers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  {path: '', component: MainSliderComponent },
  {path: 'services-and-solutions', component: ServicesandsolutionsComponent },
  {path: 'partners-and-customers', component : PartnersandcustomersComponent},
  {path: 'contact', component : ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    AboutComponent,
    ServicesandsolutionsComponent,
    ServicesComponent,
    SolutionsComponent,
    PartnersandcustomersComponent,
    PartnersComponent,
    CustomersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
