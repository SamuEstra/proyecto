import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  registerForm!: FormGroup;  // Usar '!' para indicar que será inicializado

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      nombre: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)] // Solo letras y espacios
      ],
      apellido: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)] // Solo letras y espacios
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { email, password, nombre, apellido } = this.registerForm.value;
      this.authService.register(email, password, nombre, apellido);
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
  

  preventPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  preventCopy(event: ClipboardEvent) {
    event.preventDefault();
  }

  preventCut(event: ClipboardEvent) {
    event.preventDefault();
  }
}
