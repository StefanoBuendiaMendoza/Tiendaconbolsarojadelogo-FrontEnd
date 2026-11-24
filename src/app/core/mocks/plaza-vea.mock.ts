import {
  DepartmentCard,
  FlashDeal,
  HeroBanner,
  NavCategory,
  Product,
} from '../models/plaza-vea.model';

export const MOCK_NAV_CATEGORIES: NavCategory[] = [
  { id: 'super', name: 'Supermercado' },
  { id: 'electro', name: 'Electro y Tecnología' },
  { id: 'hogar', name: 'Hogar y Muebles' },
  { id: 'moda', name: 'Moda y Calzado' },
  { id: 'belleza', name: 'Belleza y Cuidado Personal' },
  { id: 'bebe', name: 'Mundo Infantil y Juguetes' },
  { id: 'mascotas', name: 'Mascotas' },
  { id: 'ofertas', name: '¡Precios Bajos Siempre!', badge: 'OFERTAS' },
];

export const MOCK_HERO_BANNERS: HeroBanner[] = [
  {
    id: 'b1',
    title: 'Banner principal 1',
    imageUrl: '/hero/HP-BANNER-PRINCIPAL-F-D-20NOV-2026-B.webp',
  },
  {
    id: 'b2',
    title: 'Banner principal 2',
    imageUrl: '/hero/HP-BANNER-PRINCIPAL-NF-D-20NOV-2026-B.webp',
  },
  {
    id: 'b3',
    title: 'Banner destacado 1',
    imageUrl: '/hero/RETAILMEDIA-F-ROTADOR-PRINCIPAL-D-GLORIA-09NOV.webp',
  },
  {
    id: 'b4',
    title: 'Banner destacado 2',
    imageUrl: '/hero/RETAILMEDIA-F-ROTADOR-PRINCIPAL-D-GLORIA-18NOVA.webp',
  },
];

export const MOCK_DEPARTMENTS: DepartmentCard[] = [
  {
    id: 'supermercado',
    title: 'Supermercado',
    description:
      'Los mejores precios en tus marcas favoritas de abarrotes, lácteos, carnes, frutas y verduras.',
    buttonText: 'Ingresar',
    imageUrl:
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
    tags: ['Abarrotes', 'Carnes y Aves', 'Frutas y Verduras', 'Lácteos'],
  },
  {
    id: 'electro',
    title: 'Electro, hogar y más',
    description:
      'Renueva tu hogar con lo último en tecnología, refrigeración, televisores, muebles y decoración.',
    buttonText: 'Ingresar',
    imageUrl:
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80',
    tags: ['Televisores', 'Refrigeración', 'Laptops', 'Pequeños Electro'],
  },
];

export const MOCK_FLASH_DEAL: FlashDeal = {
  title: 'plazavea hoy',
  hours: 5,
  minutes: 24,
  seconds: 18,
  products: [
    {
      id: 'f1',
      name: 'Smart TV UHD 50" 4K Smart Hub con Asistente de Voz',
      brand: 'SAMSUNG',
      imageUrl:
        'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=400&q=80',
      regularPrice: 1999.0,
      onlinePrice: 1449.0,
      ohPrice: 1399.0,
      discountPercentage: 30,
      category: 'flash',
      badge: 'OFERTA TOP',
    },
    {
      id: 'f2',
      name: 'Licuadora Oster Reversible 1.5L Cuchillas de Acero',
      brand: 'OSTER',
      imageUrl:
        'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=400&q=80',
      regularPrice: 249.0,
      onlinePrice: 189.0,
      ohPrice: 169.0,
      discountPercentage: 24,
      category: 'flash',
      badge: 'MÁS VENDIDO',
    },
    {
      id: 'f3',
      name: 'Refrigeradora No Frost Inox 320L con dispensador de agua',
      brand: 'MABE',
      imageUrl:
        'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80',
      regularPrice: 1899.0,
      onlinePrice: 1349.0,
      ohPrice: 1249.0,
      discountPercentage: 34,
      category: 'flash',
      badge: 'AHORRO EXTRA',
    },
  ],
};

export const MOCK_ELECTRO_PRODUCTS: Product[] = [
  {
    id: 'e1',
    name: 'Refrigeradora Side by Side 520L Inox Digital Inverter',
    brand: 'SAMSUNG',
    imageUrl:
      'https://plazavea.vteximg.com.br/arquivos/ids/35593212-162-162/20633772.jpg?v=639214776096800000',
    regularPrice: 3299.0,
    onlinePrice: 2699.0,
    ohPrice: 2499.0,
    discountPercentage: 24,
    category: 'electro',
    badge: '-24%',
    inStock: true,
  },
  {
    id: 'e2',
    name: 'Parrilla a Carbón Premium Portátil con Ruedas y Bandeja',
    brand: 'GRILLMASTER',
    imageUrl:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80',
    regularPrice: 429.0,
    onlinePrice: 299.9,
    ohPrice: 279.9,
    discountPercentage: 30,
    category: 'electro',
    badge: 'TEMPORADA',
    inStock: true,
  },
  {
    id: 'e3',
    name: 'Silla de Oficina Ergonómica Regulable con Soporte Lumbar',
    brand: 'KREA',
    imageUrl:
      'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=400&q=80',
    regularPrice: 349.0,
    onlinePrice: 219.0,
    ohPrice: 199.0,
    discountPercentage: 40,
    category: 'electro',
    badge: '-40%',
    inStock: true,
  },
  {
    id: 'e4',
    name: 'Horno Microondas Digital 23L con Grill y Acabado Espejo',
    brand: 'LG',
    imageUrl:
      'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=400&q=80',
    regularPrice: 489.0,
    onlinePrice: 389.0,
    ohPrice: 369.0,
    discountPercentage: 20,
    category: 'electro',
    inStock: true,
  },
  {
    id: 'e5',
    name: 'Smart TV 55" OLED Cinema 4K 120Hz Dolby Atmos',
    brand: 'LG',
    imageUrl:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=400&q=80',
    regularPrice: 4199.0,
    onlinePrice: 3199.0,
    ohPrice: 2999.0,
    discountPercentage: 28,
    category: 'electro',
    badge: 'ESTELAR',
    inStock: true,
  },
  {
    id: 'e6',
    name: 'Side by Side 520L Inox Digital Inverter',
    brand: 'SAMSUNG',
    imageUrl:
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=400&q=80',
    regularPrice: 3299.0,
    onlinePrice: 2699.0,
    ohPrice: 2499.0,
    discountPercentage: 24,
    category: 'electro',
    badge: '-24%',
    inStock: true,
  },
];

export const MOCK_SUPERMARKET_PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Pollo Fresco Entero con Menudencia San Fernando x kg',
    brand: 'SAN FERNANDO',
    imageUrl:
      'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&q=80',
    regularPrice: 12.9,
    onlinePrice: 9.8,
    unitText: 'Precio x kg',
    discountPercentage: 24,
    category: 'supermercado',
    badge: 'OFERTÓN',
    inStock: true,
  },
  {
    id: 's2',
    name: 'Arroz Extra Costeño Bolsa de 5 kg Grano Seleccionado',
    brand: 'COSTEÑO',
    imageUrl:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
    regularPrice: 25.5,
    onlinePrice: 21.9,
    unitText: 'Bolsa 5kg',
    discountPercentage: 14,
    category: 'supermercado',
    inStock: true,
  },
  {
    id: 's3',
    name: 'Alimento para Perro Adulto Carne y Cereales 15 kg',
    brand: 'RICOCAN',
    imageUrl:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80',
    regularPrice: 129.9,
    onlinePrice: 104.9,
    unitText: 'Saco 15kg',
    discountPercentage: 19,
    category: 'supermercado',
    badge: 'PROMO',
    inStock: true,
  },
  {
    id: 's4',
    name: 'Aceite Vegetal Primor Clásico Botella 900 ml Pack x 3',
    brand: 'PRIMOR',
    imageUrl:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80',
    regularPrice: 32.9,
    onlinePrice: 26.5,
    unitText: 'Pack 3 unidades',
    discountPercentage: 19,
    category: 'supermercado',
    inStock: true,
  },
  {
    id: 's5',
    name: 'Cerveza Rubia Pilsen Callao Sixpack Lata 355 ml',
    brand: 'PILSEN',
    imageUrl:
      'https://images.unsplash.com/photo-1608270199042-3004313d3957?auto=format&fit=crop&w=400&q=80',
    regularPrice: 28.9,
    onlinePrice: 23.9,
    unitText: 'Pack x 6 latas',
    discountPercentage: 17,
    category: 'supermercado',
    badge: 'FIN DE SEMANA',
    inStock: true,
  },
];

export const MOCK_CATEGORY_CAROUSEL = [
  {
    title: 'Climatización',
    subtitle: 'Aires y ventiladores',
    imageUrl:
      'https://images.unsplash.com/photo-1614633833026-06203511433f?auto=format&fit=crop&w=350&q=80',
  },
  {
    title: 'Cenas Navideñas',
    subtitle: 'Pavos, jamones y dulces',
    imageUrl:
      'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=350&q=80',
  },
  {
    title: 'Mundo Juguetes',
    subtitle: 'Muñecas, pistas y más',
    imageUrl:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=350&q=80',
  },
  {
    title: 'Canastas y Licores',
    subtitle: 'Los mejores brindis',
    imageUrl:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=350&q=80',
  },
];
