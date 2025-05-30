import { Component } from '@angular/core';
import { HomePageComponent } from "../home/home-page.component";
import { AboutPageComponent } from "../about-us/about-page.component";
import { NavbarComponent } from "../../shared/nav/navbar.component";
import { FooterPageComponent } from "../../shared/footer/footer-page.component";
import { BookingPageComponent } from "../book/booking-page.component";
import { PlatformComponent } from "../platform/platform.component";

@Component({
  selector: 'app-landing-page',
  imports: [HomePageComponent, AboutPageComponent, NavbarComponent, FooterPageComponent, BookingPageComponent, PlatformComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
