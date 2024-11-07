import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importing our Home page component to the routes file
export const routes: Routes = [
    {path:'', component:HomeComponent} // Empty string means home page of our application. Going to the home page of our app should load this component (HomeComponent)
];
