import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,ButtonModule,HeaderComponent,HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
