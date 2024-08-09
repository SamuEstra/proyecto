import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:3000/login', user)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/home']);
        } else {
          console.error('Autenticación fallida');
        }
      }, error => {
        console.error('Error al iniciar sesión:', error);
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
