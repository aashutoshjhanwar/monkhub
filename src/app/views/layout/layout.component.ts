import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ContentComponent } from '../../shared/components/content/content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,HeaderComponent,ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
