import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_HERO_BANNERS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-special-banners',
  imports: [CommonModule],
  templateUrl: './special-banners.component.html',
})
export class SpecialBannersComponent {
  protected readonly banners = MOCK_HERO_BANNERS.map((b) => b.imageUrl);
}

