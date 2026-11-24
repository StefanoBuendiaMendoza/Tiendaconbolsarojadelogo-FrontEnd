import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-images',
  imports: [CommonModule],
  templateUrl: './promo-images.component.html',
})
export class PromoImagesComponent {
  protected readonly promoImages = [
    '/hero/promo-images/FRANJA-NAVIDAD-M-22NOV-AA.webp',
    '/hero/promo-images/FRANJA-CANASTAS-NAVIDAD-HP-M-NOV2026-A.webp',
  ];
}
