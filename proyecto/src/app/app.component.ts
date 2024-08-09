import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/Auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showMenu: boolean = false;

  constructor(
    private router: Router,
    private menuController: MenuController,
    private authService: AuthService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = !['/login', '/registrarse'].includes(event.urlAfterRedirects);
        this.updateMenuVisibility();
      }
    });

    // Redirige a login si no está autenticado
    if (!this.authService.getUser()) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    this.showMenu = !['/login', '/registrarse'].includes(this.router.url);
    this.updateMenuVisibility();
  }

  logout() {
    this.authService.logout();
    this.menuController.close(); // Cierra el menú
  }

  navigateAndCloseMenu(route: string) {
    this.router.navigateByUrl(route);
    this.menuController.close(); // Cierra el menú
  }

  updateMenuVisibility() {
    this.menuController.enable(this.showMenu, 'first');
  }
}
