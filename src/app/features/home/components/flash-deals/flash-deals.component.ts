import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_FLASH_DEAL, MOCK_ELECTRO_PRODUCTS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-flash-deals',
  imports: [CommonModule],
  templateUrl: './flash-deals.component.html',
})
export class FlashDealsComponent implements OnInit, OnDestroy {
  protected readonly timerHours = signal(MOCK_FLASH_DEAL.hours);
  protected readonly timerMinutes = signal(MOCK_FLASH_DEAL.minutes);
  protected readonly timerSeconds = signal(MOCK_FLASH_DEAL.seconds);
  protected readonly images = [
    ...MOCK_FLASH_DEAL.products.map((p) => p.imageUrl),
    ...MOCK_ELECTRO_PRODUCTS.slice(0, 2).map((p) => p.imageUrl),
  ];
  private timerInterval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      let s = this.timerSeconds() - 1;
      let m = this.timerMinutes();
      let h = this.timerHours();

      if (s < 0) {
        s = 59;
        m -= 1;
        if (m < 0) {
          m = 59;
          h -= 1;
          if (h < 0) {
            h = 12;
          }
        }
      }
      this.timerSeconds.set(s);
      this.timerMinutes.set(m);
      this.timerHours.set(h);
    }, 1000);
  }
}

