import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_HERO_BANNERS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-discounts',
  imports: [CommonModule],
  templateUrl: './discounts.component.html',
})
export class DiscountsComponent {
  protected readonly images = Array.from(
    { length: 8 },
    (_, i) => MOCK_HERO_BANNERS[i % MOCK_HERO_BANNERS.length].imageUrl
  );
}
