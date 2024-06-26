import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private visibilityService: VisibilityService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Registro exitoso', this.registerForm.value);

      // Cierra el modal de registro
      const modalElement = document.getElementById('registerModal');
      if (modalElement) {
        const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
        modal.hide();

        // Remover manualmente el backdrop residual
        modalElement.addEventListener('hidden.bs.modal', () => {
          this.removeBackdrops();
          this.visibilityService.showHome(false);
          this.visibilityService.showNavbar(false);
          this.visibilityService.showChat(true);
          this.router.navigate(['/chat']);
        }, { once: true });
      } else {
        console.error('No se pudo encontrar el elemento modal');
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  private removeBackdrops(): void {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach((backdrop) => backdrop.remove());
    document.body.classList.remove('modal-open');
    document.body.removeAttribute('style');
  }
}
