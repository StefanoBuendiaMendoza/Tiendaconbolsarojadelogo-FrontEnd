import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/plaza-vea.model';
import {
  MOCK_ELECTRO_PRODUCTS,
  MOCK_SUPERMARKET_PRODUCTS,
} from '../../core/mocks/plaza-vea.mock';

const CATEGORY_LABELS: Record<Product['category'], string> = {
  electro: 'Electro y Tecnología',
  supermercado: 'Supermercado',
  flash: 'Ofertas',
  hogar: 'Hogar y Muebles',
};

const DEFAULT_SELLER_INFO: Partial<Product> = {
  soldBy: 'VITAPOINT',
  sellerBusinessName:
    'BLUE CR TRADING SOCIEDAD ANONIMA CERRADA - BLUE CR TRADING S.A.C.',
  sellerRuc: '20515391500',
  deliveryOptions: [
    { type: 'Delivery programado', fromPrice: 6.9 },
    { type: 'Recojo en tienda', free: true },
  ],
  paymentMethods: ['Pago online con métodos de pago'],
  sipPromo:
    '¡Pide tu Tarjeta de Crédito Sip desde la web! y recibe S/50 en tu primera compra online por compras mayores a S/100. ¡Solicítala aquí!',
  cashback:
    'Te devolvemos el 1% de toda tu compra pagando con tus tarjetas de crédito o débito Sip.',
};

function findProduct(id: string | null): Product | null {
  const all = [...MOCK_ELECTRO_PRODUCTS, ...MOCK_SUPERMARKET_PRODUCTS];
  const base = !id ? (all[0] ?? null) : (all.find((p) => p.id === id) ?? all[0] ?? null);
  if (!base) return null;
  return {
    ...DEFAULT_SELLER_INFO,
    ...base,
    deliveryOptions: base.deliveryOptions ?? DEFAULT_SELLER_INFO.deliveryOptions,
    paymentMethods: base.paymentMethods ?? DEFAULT_SELLER_INFO.paymentMethods,
  };
}

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  protected readonly cartService = inject(CartService);

  protected readonly product = signal<Product | null>(null);
  protected readonly selectedImage = signal<string>('');
  protected readonly cuotas = signal<number>(1);

  protected readonly images = computed(() => {
    const p = this.product();
    if (!p) return [];
    return p.images && p.images.length ? p.images : [p.imageUrl];
  });

  protected readonly monthlyPayment = computed(() => {
    const p = this.product();
    if (!p) return 0;
    const base = p.ohPrice ?? p.onlinePrice;
    return base / this.cuotas();
  });

  protected readonly categoryLabel = computed(() => {
    const p = this.product();
    return p ? CATEGORY_LABELS[p.category] : '';
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const p = findProduct(id);
    this.product.set(p);
    if (p) this.selectedImage.set(p.images?.[0] ?? p.imageUrl);
  }

  discountOf(price: number): number {
    const p = this.product();
    if (!p || !p.regularPrice) return 0;
    return Math.round(((p.regularPrice - price) / p.regularPrice) * 100);
  }

  addToCart() {
    const p = this.product();
    if (p) this.cartService.addToCart(p);
  }
}