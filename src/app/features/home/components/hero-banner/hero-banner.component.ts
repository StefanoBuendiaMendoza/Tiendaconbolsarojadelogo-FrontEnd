import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_HERO_BANNERS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-hero-banner',
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  protected readonly heroBanners = signal(MOCK_HERO_BANNERS);
  protected readonly currentBannerIndex = signal(0);
  private carouselInterval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.carouselInterval) clearInterval(this.carouselInterval);
  }

  private startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextBanner();
    }, 6000);
  }

  nextBanner() {
    this.currentBannerIndex.update((i) => (i + 1) % this.heroBanners().length);
  }

  prevBanner() {
    this.currentBannerIndex.update((i) =>
      i === 0 ? this.heroBanners().length - 1 : i - 1
    );
  }

  setBanner(index: number) {
    this.currentBannerIndex.set(index);
  }
}

