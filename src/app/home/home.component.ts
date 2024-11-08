import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-image-gallery',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagePath: string = "images/wallpaper1.jpg";
}
