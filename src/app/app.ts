import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { MetricasComponent } from './components/metricas/metricas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent,NavbarComponent,HeroComponent,StatsComponent,ProcesoComponent,NosotrosComponent,CtaBannerComponent,MetricasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}