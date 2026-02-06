import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Adjust path if needed

import { AboutmeComponent } from "./aboutme/aboutme.component";
import { ExperienceComponent } from './experience/experience.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, AboutmeComponent, ExperienceComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  imagePath: string = "images/wallpaper1.jpg";
  goldelite: string = "images/gold_elite.png"
  elite1: string = "images/elite1.jpeg"
  halo2: string = "images/halo2.png"
  arbiter: string = "images/arbiter.png"
  noble6: string = "images/noble6.png"
}

