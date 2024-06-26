import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../../visibility.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostrarNavbar!: Observable<boolean>;
  logoUrl: string = 'assets/images/logo.png';

  constructor(private visibilityService: VisibilityService) {}

  ngOnInit(): void {
    this.mostrarNavbar = this.visibilityService.showNavbar$;
  }
}
