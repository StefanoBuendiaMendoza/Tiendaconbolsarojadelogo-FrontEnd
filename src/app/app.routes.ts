import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent,
      ),
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: 'catalogo/:category',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: 'categoria/:category',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: ':category',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: 'catalog',
    redirectTo: 'catalogo',
  },
  {
    path: 'productos',
    redirectTo: 'catalogo',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

