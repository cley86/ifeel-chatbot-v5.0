import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private mostrarNavbarSubject = new BehaviorSubject<boolean>(true);
  mostrarNavbar$ = this.mostrarNavbarSubject.asObservable();

  mostrarNavbar(mostrar: boolean) {
    this.mostrarNavbarSubject.next(mostrar);
  }
}
