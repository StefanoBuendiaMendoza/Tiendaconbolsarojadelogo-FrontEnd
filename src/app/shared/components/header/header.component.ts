import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { MOCK_NAV_CATEGORIES } from '../../../core/mocks/plaza-vea.mock';
import { CartIconComponent } from '../../icons/cart-icon/cart-icon.component';
import { Icon } from '../../icons/icon.model';
import { PackageIconComponent } from '../../icons/package-icon/package-icon.component';
import { UserIconComponent } from '../../icons/user-icon/user-icon.component';
import { ChevronDownIconComponent } from '../../icons/chevron-down-icon/chevron-down-icon.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    CartIconComponent,
    PackageIconComponent,
    UserIconComponent,
    ChevronDownIconComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly cartService = inject(CartService);
  protected readonly cartIcon: Icon = { fill: 'none', iconClass: 'w-6 h-6' };
  protected readonly packageIcon: Icon = { fill: 'none', iconClass: 'w-5 h-5' };
  protected readonly userIcon: Icon = { fill: 'none', iconClass: 'w-5 h-5' };
  protected readonly chevronIcon: Icon = { fill: 'none', iconClass: 'w-4 h-4' };
  protected readonly navCategories = signal(MOCK_NAV_CATEGORIES);
  protected readonly isCategoryMenuOpen = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly deliveryLocation = signal('Lima, Miraflores');

  toggleCategoryMenu() {
    this.isCategoryMenuOpen.update((v) => !v);
  }
}

