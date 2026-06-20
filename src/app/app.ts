import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent,NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}