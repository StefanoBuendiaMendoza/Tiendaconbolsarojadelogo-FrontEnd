import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { MOCK_SUPERMARKET_PRODUCTS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-best-sellers-supermarket',
  imports: [ProductCardComponent],
  templateUrl: './best-sellers-supermarket.component.html',
})
export class BestSellersSupermarketComponent {
  protected readonly products = MOCK_SUPERMARKET_PRODUCTS;
}