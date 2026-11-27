import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_FLASH_DEAL } from '../../../../core/mocks/plaza-vea.mock';

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
    'https://plazavea.vteximg.com.br/arquivos/NF-SOLOXHOY-D-HR-20631696-26NOV-1.webp',
    'https://plazavea.vteximg.com.br/arquivos/NF-SOLOXHOY-D-HR-20714702-26NOV-2.webp',
    'https://plazavea.vteximg.com.br/arquivos/NF-SOLOXHOY-D-HR-20394547-26NOV-3.webp',
    'https://plazavea.vteximg.com.br/arquivos/FOOD-SOLOXHOY-D-BW-20050284-26NOV-01.webp',
    'https://plazavea.vteximg.com.br/arquivos/FOOD-SOLOXHOY-D-BW-131922-26NOV-02.webp',
    'https://plazavea.vteximg.com.br/arquivos/FOOD-SOLOXHOY-D-BW-20358117-26NOV-03.webp',
    'https://plazavea.vteximg.com.br/arquivos/NF-SOLOXHOY-D-HR-20633524-26NOV-4.webp',
    'https://plazavea.vteximg.com.br/arquivos/NF-SOLOXHOY-D-HR-20571566-26NOV-5.webp',
    'https://plazavea.vteximg.com.br/arquivos/MKP-SOLOXHOY-D-HR-12689787-26NOV-6.webp',
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

