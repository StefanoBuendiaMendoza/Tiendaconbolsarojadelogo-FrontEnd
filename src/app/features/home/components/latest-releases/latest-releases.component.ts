import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_HERO_BANNERS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-latest-releases',
  imports: [CommonModule],
  templateUrl: './latest-releases.component.html',
})
export class LatestReleasesComponent {
  protected readonly images = Array.from(
    { length: 11 },
    (_, i) => MOCK_HERO_BANNERS[i % MOCK_HERO_BANNERS.length].imageUrl
  );
}
