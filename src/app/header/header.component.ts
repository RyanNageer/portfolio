import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

}
