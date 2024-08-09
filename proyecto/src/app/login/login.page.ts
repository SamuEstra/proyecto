import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  formulario: FormGroup;

  constructor(private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder  
    ) 
    {
      this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      });
      }

   ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.formulario.valid) {
      const email = this.formulario.get('email')?.value;
      const password = this.formulario.get('password')?.value;
      this.authService.login(email, password);
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  
  

  goToRegister() {
    this.router.navigate(['/cuenta']);
  }
}
