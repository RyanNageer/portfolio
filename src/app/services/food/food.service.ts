import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return ['/..public/assets/images/aliens/elite1.jpeg',
      '/..public/assets/images/gold_elite.png',
      '/..public/assets/images/grunt1.png',
      '/..public/assets/images/halo_infinite_wallpaper.png',
      '/..public/assets/images/master_chief1.png',
      '/..public/assets/images/master_chief2.png',
      '/..public/assets/images/wallpaper1.jpg',
      '/..public/assets/images/white_elite.png',

    ]
  }
}
