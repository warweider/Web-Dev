import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CATEGORIES } from './data/categories';
import { PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
  deleteProductFromStore(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}