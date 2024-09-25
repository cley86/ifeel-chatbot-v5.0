import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  imageUrl: string = 'assets/images/hero-image.png';
  showLogin: boolean = false;

  constructor(
    private router: Router,
    private visibilityService: VisibilityService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/') {
        this.visibilityService.showHome(true);
        this.visibilityService.showLogin(false); // Agregué esta línea
        this.visibilityService.showNavbar(true);
      }
    });
  }

  onLoginClick(): void {
    this.visibilityService.showNavbar(false);
    this.visibilityService.showHome(false);
    this.visibilityService.showLogin(true);
    this.router.navigate(['/login']);
  }
}
