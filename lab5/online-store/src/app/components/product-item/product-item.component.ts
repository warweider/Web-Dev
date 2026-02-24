import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  stars(): number[] {
    return [1,2,3,4,5];
  }

  like() {
    this.product.likes++;
  }

  delete() {
    if (confirm('Delete this product?')) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareTelegram() {
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
      `&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}