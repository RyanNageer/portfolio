import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food/food.service';

import { BrowserModule } from '@angular/platform-browser'


@Component({
    selector: 'app-image-gallery',
    templateUrl: './home.component.html',
    imports: [],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagePath: string = "images/wallpaper1.jpg";
}
