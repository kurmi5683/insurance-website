import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from "./components/hero/hero.component";
import { FeaturesComponent } from "./components/features/features.component";
import { AboutComponent } from './components/about/about.component';
import { WhychooseusComponent } from './components/whychooseus/whychooseus.component';
import { CtaComponent } from "./components/cta/cta.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ServicesComponent } from "./components/services/services.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FeaturesComponent, AboutComponent, WhychooseusComponent, CtaComponent, FooterComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insurance-website';
}
