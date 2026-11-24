import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { MOCK_ELECTRO_PRODUCTS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-brand-showcase',
  imports: [ProductCardComponent],
  templateUrl: './brand-showcase.component.html',
})
export class BrandShowcaseComponent {
  protected readonly products = MOCK_ELECTRO_PRODUCTS;
}