import { Component, OnInit } from '@angular/core';
import { VisibilityService } from './visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ifeel-chatbot';
  showHome: boolean = true;
  showNavbar: boolean = true;
  showChat: boolean = false;
  showLogin: boolean = false;

  constructor(private visibilityService: VisibilityService) {}

  ngOnInit(): void {
    this.visibilityService.showHome$.subscribe(show => this.showHome = show);
    this.visibilityService.showNavbar$.subscribe(show => this.showNavbar = show);
    this.visibilityService.showChat$.subscribe(show => this.showChat = show);
    this.visibilityService.showLogin$.subscribe(show => this.showLogin = show);
  }
}
