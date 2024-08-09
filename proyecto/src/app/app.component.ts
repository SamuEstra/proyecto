import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showMenu: boolean = false; // Variable para controlar la visibilidad del menú

  constructor(
    private router: Router,
    private authService: AuthService,
    private menuController: MenuController
  ) {
    // Controlar la visibilidad del menú según la ruta activa
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = !['/login', '/registrarse'].includes(event.urlAfterRedirects);
        this.updateMenuVisibility();
      }
    });

    if (!this.authService.checkAuthentication()) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    // Inicializar el estado del menú al cargar la aplicación
    this.showMenu = !['/login', '/registrarse'].includes(this.router.url);
    this.updateMenuVisibility();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    this.menuController.close(); // Cierra el menú
  }

  navigateAndCloseMenu(route: string) {
    this.router.navigateByUrl(route);
    this.menuController.close(); // Cierra el menú
  }

  updateMenuVisibility() {
    if (this.showMenu) {
      this.menuController.enable(true, 'first');
    } else {
      this.menuController.enable(false, 'first');
    }
  }
}
