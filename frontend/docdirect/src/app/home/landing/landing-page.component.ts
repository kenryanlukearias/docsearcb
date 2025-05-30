import { Component } from '@angular/core';
import { HomePageComponent } from "../home/home-page.component";
import { ServicesPageComponent } from "../services/services-page.component";
import { AboutPageComponent } from "../about-us/about-page.component";
import { NavbarComponent } from "../../shared/nav/navbar.component";
import { FooterPageComponent } from "../../shared/footer/footer-page.component";

@Component({
  selector: 'app-landing-page',
  imports: [HomePageComponent, ServicesPageComponent, AboutPageComponent, NavbarComponent, FooterPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
