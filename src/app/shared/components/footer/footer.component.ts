import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChevronDownIconComponent } from '../../icons/chevron-down-icon/chevron-down-icon.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, ChevronDownIconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly trustBadges = [
    { title: 'Recojo en tienda', image: '/footer/footer-benefit-pick-store.png' },
    { title: 'Delivery programado', image: '/footer/footer-benefit-delivery.png' },
    { title: 'Métodos de pago seguros', image: '/footer/footer-benefit-pay.png' },
  ];
  protected email = signal('');
  protected subscribed = signal(false);

  subscribeNewsletter() {
    if (this.email().trim()) {
      this.subscribed.set(true);
      setTimeout(() => {
        this.subscribed.set(false);
        this.email.set('');
      }, 4000);
    }
  }
}

