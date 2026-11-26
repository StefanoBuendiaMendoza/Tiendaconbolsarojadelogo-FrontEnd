import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CartIconComponent } from '../../shared/icons/cart-icon/cart-icon.component';
import { TicketIconComponent } from '../../shared/icons/ticket-icon/ticket-icon.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, CartIconComponent, TicketIconComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  protected readonly cartService = inject(CartService);
}