import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private showHomeSource = new BehaviorSubject<boolean>(true);
  showHome$ = this.showHomeSource.asObservable();

  private showNavbarSource = new BehaviorSubject<boolean>(true);
  showNavbar$ = this.showNavbarSource.asObservable();

  private showChatSource = new BehaviorSubject<boolean>(false);
  showChat$ = this.showChatSource.asObservable();

  private showLoginSource = new BehaviorSubject<boolean>(false);
  showLogin$ = this.showLoginSource.asObservable();

  showHome(show: boolean): void {
    this.showHomeSource.next(show);
  }

  showNavbar(show: boolean): void {
    this.showNavbarSource.next(show);
  }

  showChat(show: boolean): void {
    this.showChatSource.next(show);
  }

  showLogin(show: boolean): void {
    this.showLoginSource.next(show);
  }
}
