import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  menuAbierto = signal(false);
  toggleMenu() { this.menuAbierto.update(v => !v); }
}