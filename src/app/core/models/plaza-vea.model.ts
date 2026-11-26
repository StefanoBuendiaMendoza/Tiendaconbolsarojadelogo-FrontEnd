export interface DeliveryOption {
  type: string;
  fromPrice?: number;
  free?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  sku?: string;
  imageUrl: string;
  images?: string[];
  regularPrice: number;
  onlinePrice: number;
  ohPrice?: number;
  discountPercentage?: number;
  unitText?: string;
  badge?: string;
  category: 'electro' | 'supermercado' | 'flash' | 'hogar';
  inStock?: boolean;
  stock?: number;
  soldBy?: string;
  sellerBusinessName?: string;
  sellerRuc?: string;
  deliveryOptions?: DeliveryOption[];
  paymentMethods?: string[];
  sipPromo?: string;
  cashback?: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  imageUrl: string;
}

export interface DepartmentCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  tags: string[];
}

export interface FlashDeal {
  title: string;
  hours: number;
  minutes: number;
  seconds: number;
  products: Product[];
}

export interface NavCategory {
  id: string;
  name: string;
  icon?: string;
  badge?: string;
  link?: string;
}

