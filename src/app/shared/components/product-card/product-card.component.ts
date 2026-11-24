import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/plaza-vea.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  protected readonly cartService = inject(CartService);
  protected added = signal(false);

  addToCart() {
    this.cartService.addToCart(this.product);
    this.added.set(true);
    setTimeout(() => this.added.set(false), 1200);
  }
}