import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-image-gallery',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    '../public/assets/images/elite1.jpeg',
    '../public/assets/images/gold_elite.png',
    '../public/assets/images/grunt1.png'
  ];
}
