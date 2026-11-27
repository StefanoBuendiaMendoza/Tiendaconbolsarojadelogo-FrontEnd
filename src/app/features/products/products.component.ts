import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../core/models/plaza-vea.model';
import { MOCK_CATALOG_PRODUCTS } from '../../core/mocks/plaza-vea.mock';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

const CATEGORY_OPTIONS: { id: string; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'supermercado', label: 'Supermercado' },
  { id: 'electrohogar', label: 'Electro y Hogar' },
  { id: 'electro', label: 'Electro y Tecnología' },
  { id: 'hogar', label: 'Hogar y Muebles' },
  { id: 'flash', label: 'Ofertas' },
];

const SLUG_TO_CATEGORY: Record<string, string> = {
  all: 'all',
  todos: 'all',
  catalogo: 'all',
  supermercado: 'supermercado',
  electro: 'electro',
  electrohogar: 'electrohogar',
  'electro-hogar': 'electrohogar',
  hogar: 'hogar',
  ofertas: 'flash',
  flash: 'flash',
};

const PRICE_RANGES: { id: string; label: string }[] = [
  { id: 'all', label: 'Todos los precios' },
  { id: '0-25', label: 'Menos de S/ 25' },
  { id: '25-50', label: 'S/ 25 - S/ 50' },
  { id: '50-100', label: 'S/ 50 - S/ 100' },
  { id: '100+', label: 'Más de S/ 100' },
];

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  protected readonly allProducts = MOCK_CATALOG_PRODUCTS;
  protected readonly selectedCategory = signal<string>('all');
  protected readonly selectedBrands = signal<Set<string>>(new Set());
  protected readonly selectedDiscount = signal<number>(0);
  protected readonly onlyInStock = signal(false);
  protected readonly priceRange = signal<string>('all');
  protected readonly sortBy = signal<string>('relevance');
  protected readonly searchQuery = signal<string>('');
  protected readonly visibleCount = signal<number>(12);

  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly priceRanges = PRICE_RANGES;

  protected readonly categories = computed(() => {
    const counts = new Map<string, number>();
    for (const p of this.allProducts) {
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    }
    const electrohogarCount =
      (counts.get('electro') ?? 0) + (counts.get('hogar') ?? 0);
    return CATEGORY_OPTIONS.map((c) => {
      let count = 0;
      if (c.id === 'all') count = this.allProducts.length;
      else if (c.id === 'electrohogar') count = electrohogarCount;
      else count = counts.get(c.id) ?? 0;
      return { ...c, count };
    }).filter((c) => c.id === 'all' || c.count > 0);
  });

  protected readonly availableBrands = computed(() => {
    const cat = this.selectedCategory();
    const base =
      cat === 'all'
        ? this.allProducts
        : cat === 'electrohogar'
          ? this.allProducts.filter(
              (p) => p.category === 'electro' || p.category === 'hogar',
            )
          : this.allProducts.filter((p) => p.category === cat);
    return [...new Set(base.map((p) => p.brand))].sort();
  });

  protected readonly filteredProducts = computed<Product[]>(() => {
    const cat = this.selectedCategory();
    const brands = this.selectedBrands();
    const minDiscount = this.selectedDiscount();
    const onlyStock = this.onlyInStock();
    const price = this.priceRange();
    const q = this.searchQuery().trim().toLowerCase();

    let list = this.allProducts.filter((p) => {
      if (cat === 'electrohogar') {
        if (p.category !== 'electro' && p.category !== 'hogar') return false;
      } else if (cat !== 'all' && p.category !== cat) {
        return false;
      }
      if (brands.size && !brands.has(p.brand)) return false;
      if (minDiscount && (p.discountPercentage ?? 0) < minDiscount) return false;
      if (onlyStock && !p.inStock) return false;
      const val = p.onlinePrice;
      if (price === '0-25' && !(val < 25)) return false;
      if (price === '25-50' && !(val >= 25 && val < 50)) return false;
      if (price === '50-100' && !(val >= 50 && val < 100)) return false;
      if (price === '100+' && !(val >= 100)) return false;
      if (q && !`${p.name} ${p.brand}`.toLowerCase().includes(q)) return false;
      return true;
    });

    switch (this.sortBy()) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.onlinePrice - b.onlinePrice);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.onlinePrice - a.onlinePrice);
        break;
      case 'discount-desc':
        list = [...list].sort(
          (a, b) => (b.discountPercentage ?? 0) - (a.discountPercentage ?? 0),
        );
        break;
      default:
        break;
    }
    return list;
  });

  protected readonly visibleProducts = computed(() =>
    this.filteredProducts().slice(0, this.visibleCount()),
  );

  protected readonly hasMore = computed(
    () => this.visibleCount() < this.filteredProducts().length,
  );

  protected readonly categoryLabel = computed(() => {
    const id = this.selectedCategory();
    return CATEGORY_OPTIONS.find((c) => c.id === id)?.label ?? 'Catálogo';
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const raw = params.get('category');
      if (raw) {
        const slug = raw.toLowerCase();
        this.selectedCategory.set(SLUG_TO_CATEGORY[slug] ?? slug);
        this.selectedBrands.set(new Set());
        this.visibleCount.set(12);
      } else {
        this.selectedCategory.set('all');
      }
    });
    const q = this.route.snapshot.queryParamMap.get('q');
    if (q) this.searchQuery.set(q);
  }

  protected setCategory(id: string) {
    this.selectedCategory.set(id);
    this.selectedBrands.set(new Set());
    this.visibleCount.set(12);
  }

  protected toggleBrand(brand: string) {
    const next = new Set(this.selectedBrands());
    if (next.has(brand)) next.delete(brand);
    else next.add(brand);
    this.selectedBrands.set(next);
    this.visibleCount.set(12);
  }

  protected setDiscount(value: number) {
    this.selectedDiscount.set(value);
    this.visibleCount.set(12);
  }

  protected setPriceRange(value: string) {
    this.priceRange.set(value);
    this.visibleCount.set(12);
  }

  protected setSort(value: string) {
    this.sortBy.set(value);
  }

  protected clearFilters() {
    this.selectedCategory.set('all');
    this.selectedBrands.set(new Set());
    this.selectedDiscount.set(0);
    this.onlyInStock.set(false);
    this.priceRange.set('all');
    this.searchQuery.set('');
    this.visibleCount.set(12);
  }

  protected loadMore() {
    this.visibleCount.update((v) => v + 12);
  }
}
