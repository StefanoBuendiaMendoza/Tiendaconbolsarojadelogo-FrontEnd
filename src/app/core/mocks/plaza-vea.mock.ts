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
      'https://plazavea.vteximg.com.br/arquivos/ids/36807921-450-450/20215367.jpg?v=639300142198530000',
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
  {
    id: 'e7',
    name: 'Licuadora de Vaso 1.5L 600W con 3 Velocidades y Vaso Medidor',
    brand: 'OSTER',
    sku: '20633772',
    imageUrl:
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1590794056226-7949a9487d3a?auto=format&fit=crop&w=600&q=80',
    ],
    regularPrice: 176.9,
    onlinePrice: 127.37,
    ohPrice: 119.87,
    discountPercentage: 28,
    category: 'electro',
    badge: '-28%',
    inStock: true,
    stock: 20,
    unitText: 'Unidad',
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
export const MOCK_CATALOG_PRODUCTS: Product[] = [
  { id: 'c1', name: 'Leche Entera Gloria Lata 400 g', brand: 'GLORIA', imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80', regularPrice: 4.8, onlinePrice: 4.2, discountPercentage: 12, category: 'supermercado', unitText: 'Lata 400g', inStock: true, badge: 'OFERTA' },
  { id: 'c2', name: 'Yogurt Fresa Laive Botella 1 L', brand: 'LAIVE', imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80', regularPrice: 8.9, onlinePrice: 7.5, discountPercentage: 16, category: 'supermercado', unitText: 'Botella 1L', inStock: true },
  { id: 'c3', name: 'Pan de Molde Integral Bimbo 500 g', brand: 'BIMBO', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', regularPrice: 9.5, onlinePrice: 8.2, discountPercentage: 14, category: 'supermercado', unitText: 'Paquete 500g', inStock: true },
  { id: 'c4', name: 'Café Molido Altomayo Clásico 250 g', brand: 'ALTOMAYO', imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80', regularPrice: 18.9, onlinePrice: 15.9, discountPercentage: 16, category: 'supermercado', unitText: 'Bolsa 250g', inStock: true, badge: 'MÁS VENDIDO' },
  { id: 'c5', name: 'Azúcar Rubia Costeña Bolsa 1 kg', brand: 'COSTEÑO', imageUrl: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80', regularPrice: 4.2, onlinePrice: 3.6, discountPercentage: 14, category: 'supermercado', unitText: 'Bolsa 1kg', inStock: true },
  { id: 'c6', name: 'Aceite Vegetal Primor Botella 1 L', brand: 'PRIMOR', imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80', regularPrice: 12.5, onlinePrice: 10.9, discountPercentage: 13, category: 'supermercado', unitText: 'Botella 1L', inStock: true },
  { id: 'c7', name: 'Fideos Spaghetti Don Vittorio 500 g', brand: 'DON VITTORIO', imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=400&q=80', regularPrice: 3.9, onlinePrice: 3.3, discountPercentage: 15, category: 'supermercado', unitText: 'Paquete 500g', inStock: true },
  { id: 'c8', name: 'Atún en Lata Florida en Aceite 170 g', brand: 'FLORIDA', imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80', regularPrice: 6.5, onlinePrice: 5.5, discountPercentage: 15, category: 'supermercado', unitText: 'Lata 170g', inStock: false },
  { id: 'c9', name: 'Cereal Corn Flakes Nestlé 500 g', brand: 'NESTLÉ', imageUrl: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=400&q=80', regularPrice: 14.9, onlinePrice: 12.5, discountPercentage: 16, category: 'supermercado', unitText: 'Caja 500g', inStock: true },
  { id: 'c10', name: 'Detergente Líquido Ariel 3 L', brand: 'ARIEL', imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=400&q=80', regularPrice: 42.9, onlinePrice: 36.9, discountPercentage: 14, category: 'supermercado', unitText: 'Botella 3L', inStock: true, badge: 'PROMO' },
  { id: 'c11', name: 'Papel Higiénico Suave 12 rollos', brand: 'SUAVE', imageUrl: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=400&q=80', regularPrice: 28.5, onlinePrice: 24.9, discountPercentage: 13, category: 'supermercado', unitText: 'Pack 12 rollos', inStock: true },
  { id: 'c12', name: 'Shampoo Head & Shoulders 400 ml', brand: 'HEAD & SHOULDERS', imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80', regularPrice: 22.9, onlinePrice: 18.9, discountPercentage: 17, category: 'supermercado', unitText: 'Frasco 400ml', inStock: true },
  { id: 'c13', name: 'Galletas Oreo Paquete 154 g', brand: 'OREO', imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80', regularPrice: 5.2, onlinePrice: 4.5, discountPercentage: 13, category: 'supermercado', unitText: 'Paquete 154g', inStock: true },
  { id: 'c14', name: 'Chocolate Sublime Clásico 30 g', brand: 'SUBLIME', imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80', regularPrice: 2.5, onlinePrice: 2.1, discountPercentage: 16, category: 'supermercado', unitText: 'Barra 30g', inStock: true },
  { id: 'c15', name: 'Gaseosa Inca Kola 3 L', brand: 'INCA KOLA', imageUrl: 'https://images.unsplash.com/photo-1622483767128-302e30906851?auto=format&fit=crop&w=400&q=80', regularPrice: 11.9, onlinePrice: 9.9, discountPercentage: 17, category: 'supermercado', unitText: 'Botella 3L', inStock: true, badge: 'FIN DE SEMANA' },
  { id: 'c16', name: 'Agua Mineral San Mateo 2.5 L', brand: 'SAN MATEO', imageUrl: 'https://images.unsplash.com/photo-1548839140-29a7422419ea?auto=format&fit=crop&w=400&q=80', regularPrice: 3.5, onlinePrice: 2.9, discountPercentage: 17, category: 'supermercado', unitText: 'Botella 2.5L', inStock: true },
  { id: 'c17', name: 'Cerveza Pilsen Callao Sixpack 355 ml', brand: 'PILSEN', imageUrl: 'https://images.unsplash.com/photo-1608270199042-3004313d3957?auto=format&fit=crop&w=400&q=80', regularPrice: 28.9, onlinePrice: 23.9, discountPercentage: 17, category: 'supermercado', unitText: 'Pack x6 latas', inStock: true },
  { id: 'c18', name: 'Pollo Entero San Fernando x kg', brand: 'SAN FERNANDO', imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&q=80', regularPrice: 12.9, onlinePrice: 9.8, discountPercentage: 24, category: 'supermercado', unitText: 'Precio x kg', inStock: true, badge: 'OFERTÓN' },
  { id: 'c19', name: 'Smart TV 55" OLED Cinema 4K', brand: 'LG', imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=400&q=80', regularPrice: 4199.0, onlinePrice: 3199.0, ohPrice: 2999.0, discountPercentage: 28, category: 'electro', unitText: 'Unidad', inStock: true, badge: 'ESTELAR' },
  { id: 'c20', name: 'Refrigeradora Side by Side 520L', brand: 'SAMSUNG', imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=400&q=80', regularPrice: 3299.0, onlinePrice: 2699.0, ohPrice: 2499.0, discountPercentage: 24, category: 'electro', unitText: 'Unidad', inStock: true, badge: '-24%' },
  { id: 'c21', name: 'Licuadora de Vaso Oster 1.5L', brand: 'OSTER', imageUrl: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=400&q=80', regularPrice: 176.9, onlinePrice: 127.37, ohPrice: 119.87, discountPercentage: 28, category: 'electro', unitText: 'Unidad', inStock: true, badge: '-28%' },
  { id: 'c22', name: 'Horno Microondas LG 23L', brand: 'LG', imageUrl: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=400&q=80', regularPrice: 489.0, onlinePrice: 389.0, ohPrice: 369.0, discountPercentage: 20, category: 'electro', unitText: 'Unidad', inStock: true },
  { id: 'c23', name: 'Silla de Oficina Ergonómica Krea', brand: 'KREA', imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=400&q=80', regularPrice: 349.0, onlinePrice: 219.0, ohPrice: 199.0, discountPercentage: 40, category: 'electro', unitText: 'Unidad', inStock: true, badge: '-40%' },
  { id: 'c24', name: 'Sofá 3 Cuerpos Tela Gris', brand: 'PARMA', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80', regularPrice: 1299.0, onlinePrice: 999.0, discountPercentage: 23, category: 'hogar', unitText: 'Unidad', inStock: true },
  { id: 'c25', name: 'Juego de Sábanas Queen 4 Piezas', brand: 'CANNON', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9a6d5b2384?auto=format&fit=crop&w=400&q=80', regularPrice: 189.0, onlinePrice: 149.0, discountPercentage: 21, category: 'hogar', unitText: 'Set', inStock: true },
  { id: 'c26', name: 'Lámpara de Mesa LED Moderna', brand: 'PHILIPS', imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80', regularPrice: 129.0, onlinePrice: 99.0, discountPercentage: 23, category: 'hogar', unitText: 'Unidad', inStock: false },
  { id: 'c27', name: 'Set de Ollas Acero Inoxidable 5 piezas', brand: 'THOMAS', imageUrl: 'https://images.unsplash.com/photo-1584990347449-a0b32e6c6b2a?auto=format&fit=crop&w=400&q=80', regularPrice: 299.0, onlinePrice: 239.0, discountPercentage: 20, category: 'hogar', unitText: 'Set', inStock: true },
  { id: 'c28', name: 'Toalla de Baño Algodón 70x140', brand: 'CANNON', imageUrl: 'https://images.unsplash.com/photo-1600369671738-677a6f3a0e5e?auto=format&fit=crop&w=400&q=80', regularPrice: 45.0, onlinePrice: 35.0, discountPercentage: 22, category: 'hogar', unitText: 'Unidad', inStock: true },
];
