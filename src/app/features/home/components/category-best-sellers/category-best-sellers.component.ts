import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { MOCK_ELECTRO_PRODUCTS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-category-best-sellers',
  imports: [ProductCardComponent],
  templateUrl: './category-best-sellers.component.html',
})
export class CategoryBestSellersComponent {
  protected readonly category = 'Electro y Hogar';
  protected readonly products = MOCK_ELECTRO_PRODUCTS;
}
