import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { IProductList } from '../feature.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showAddToCart: boolean = false;
  productList:IProductList[]=[]
  constructor(private homeService:HomeService,) { }

  ngOnInit(): void {
    this.getProductList()
  }


//calling api to get product list
  getProductList() {
    this.homeService.GetProductList().subscribe({
      next: (result: IProductList[]) => {
       this.productList=result

      },
      error: (err) => {
        console.log('error',err)
        
      },
    });
  }

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0); // Full stars are determined by the integer part of the rating
  }
  
  // Method to check if there is a half star
  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5; // If the fractional part is 0.5 or more, there's a half star
  }
  
  // Method to calculate empty stars
  getEmptyStars(rating: number): number[] {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalf = this.hasHalfStar(rating); // Whether there's a half star
    const emptyStars = 5 - (fullStars + (hasHalf ? 1 : 0)); // Calculate empty stars
    return Array(emptyStars).fill(0);
  }

  truncateTitle(product:IProductList):string {
    const limit = 40; // Set your desired character limit
    return product.title.length > limit 
      ? product.title.substring(0, limit) + '...' 
      : product.title;
  }
}
