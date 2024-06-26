import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  onLogin(event: Event): void {
    event.preventDefault();
    // Lógica de autenticación aquí
    if (this.username === 'user' && this.password === 'password') {
      this.isLoggedIn = true;
      // Navegar al componente de chat
      this.router.navigate(['/chat']);
    } else {
      // Manejar autenticación fallida
      alert('Username o password incorrectos');
    }
  }
}
