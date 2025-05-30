import { Component } from '@angular/core';
import { DrawerComponent } from "../drawer/drawer.component";

@Component({
  selector: 'app-navbar',
  imports: [DrawerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDrawerOpen = false;


  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
