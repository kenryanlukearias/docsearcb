import { Component } from '@angular/core';
import { DrawerComponent } from "../drawer/drawer.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [DrawerComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDrawerOpen = false;


  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
