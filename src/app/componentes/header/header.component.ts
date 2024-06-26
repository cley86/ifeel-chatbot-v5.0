import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoUrl: string = 'assets/images/logo.png';
  profileIconUrl: string = 'assets/images/profile-icon.png';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
