import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Adjust path if needed
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from "./aboutme/aboutme.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, AboutmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  imagePath: string = "images/wallpaper1.jpg";
}

