import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { DepartmentCardsComponent } from './components/department-cards/department-cards.component';
import { PromoImagesComponent } from './components/promo-images/promo-images.component';
import { FlashDealsComponent } from './components/flash-deals/flash-deals.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { LatestReleasesComponent } from './components/latest-releases/latest-releases.component';
import { BrandShowcaseComponent } from './components/brand-showcase/brand-showcase.component';
import { SpecialBannersComponent } from './components/special-banners/special-banners.component';
import { BestSellersSupermarketComponent } from './components/best-sellers-supermarket/best-sellers-supermarket.component';
import { CategoryBestSellersComponent } from './components/category-best-sellers/category-best-sellers.component';
import { SeoContentComponent } from './components/seo-content/seo-content.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeroBannerComponent,
    DepartmentCardsComponent,
    PromoImagesComponent,
    FlashDealsComponent,
    DiscountsComponent,
    LatestReleasesComponent,
    BrandShowcaseComponent,
    SpecialBannersComponent,
    BestSellersSupermarketComponent,
    CategoryBestSellersComponent,
    SeoContentComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
