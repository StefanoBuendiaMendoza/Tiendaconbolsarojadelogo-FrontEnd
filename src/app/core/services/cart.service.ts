import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/plaza-vea.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _items = signal<{ product: Product; quantity: number }[]>([]);
  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((acc, item) => acc + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this._items().reduce((acc, item) => acc + (item.product.onlinePrice * item.quantity), 0)
  );

  addToCart(product: Product) {
    this._items.update((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  }

  increment(productId: string) {
    this._items.update((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  decrement(productId: string) {
    this._items.update((current) =>
      current
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  remove(productId: string) {
    this._items.update((current) => current.filter((item) => item.product.id !== productId));
  }
}

