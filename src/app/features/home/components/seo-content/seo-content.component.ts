import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SeoColumn {
  heading: string;
  text: string;
}

@Component({
  selector: 'app-seo-content',
  imports: [CommonModule],
  templateUrl: './seo-content.component.html',
})
export class SeoContentComponent {
  protected readonly title = '¡Encuentra lo mejor en tecnología, electrohogar y supermercado en plazaVea!';
  protected readonly columns: SeoColumn[] = [
    {
      heading: '¡Todo lo que Necesitas en un solo Sitio!',
      text: 'En plazaVea nos consolidamos como la plataforma líder en el Perú para quienes buscan renovar su estilo de vida con tecnología de última generación, electrodomésticos que fusionan estilo con funcionalidad y todo lo necesario para abastecer tu hogar con lo mejor en abarrotes y productos de limpieza. Nuestra propuesta de valor combina la innovación de las marcas globales con los precios bajos que mereces, creando una experiencia de compra única donde la calidad y el ahorro convergen en un solo lugar. Entendemos que el hogar moderno es un ecosistema dinámico; por ello, nuestro catálogo está diseñado para responder a las exigencias de conectividad, eficiencia doméstica y bienestar familiar del 2026.',
    },
    {
      heading: 'La Revolución de Apple y lo Último en Tecnología',
      text: 'Si buscas dar el salto a la nueva generación de conectividad, en plazaVea encuentras lo mejor de Apple. Renueva tu comunicación con los modelos más recientes del iPhone, con un ecosistema móvil único, incluyendo el iPhone 17, iPhone 17 Pro, iPhone 17 Pro Max y el nuevo iPhone Air. Estos celulares de gama alta representan el estándar actual en potencia y fotografía computacional. Además, ofrecemos un catálogo completo de cómputo con las MacBooks e iPads, herramientas indispensables para elevar tu productividad en el trabajo o la escuela. Puedes potenciar tu experiencia con accesorios originales como el Apple Watch en todas sus generaciones, y AirPods para que todos tus dispositivos estén en perfecta sintonía.',
    },
    {
      heading: 'Equipa tu hogar con los mejores Electrodomésticos',
      text: 'La eficiencia en la cocina y la lavandería es prioridad en nuestra sección de Electrohogar, donde ofrecemos soluciones inteligentes para simplificar tus tareas diarias con tecnología de punta. Si buscas transformar tu alimentación, nuestras freidoras de aire de última generación y licuadoras de alta potencia son los aliados perfectos para preparar recetas saludables y rápidas. Asimismo, contamos con una línea robusta de electrodomésticos esenciales que incluyen refrigeradoras con sistemas de ahorro energético, lavadoras automáticas con ciclos de lavado inteligente, cocinas modernas de diversas hornillas y hornos eléctricos o empotrables de alta precisión. Cada uno de estos equipos está diseñado para maximizar el rendimiento en tu hogar, ofreciendo durabilidad y un diseño funcional que se adapta a cualquier espacio.',
    },
    {
      heading: 'Confort en el Hogar y Calidad en Supermercado',
      text: 'El descanso y la organización son los pilares de un hogar armonioso. En plazaVea, seleccionamos las mejores camas, colchones y muebles para que tu dormitorio y sala reflejen tu personalidad sin sacrificar la comodidad. Desde juegos de comedor modernos hasta sofás ergonómicos, cada pieza está pensada para durar. Esta calidad se extiende a nuestra sección de Supermercado, donde hacer el mercado online es más sencillo que nunca. Encuentra abarrotes esenciales, productos de limpieza especializados y alimentos frescos con la garantía de calidad que nos caracteriza. Ya sea que necesites abastecer tu despensa o renovar tu centro de entretenimiento, en plazaVea te ofrecemos una solución integral con ofertas exclusivas y los beneficios adicionales de tu Tarjeta Oh!.',
    },
    {
      heading: 'Tecnología en la Palma de tu Mano',
      text: 'Nuestra sección de tecnología también destaca por ofrecer televisores de última generación con resolución 8K y pantallas OLED, laptops potentes para el trabajo híbrido, computadoras de escritorio de alto rendimiento y tablets versátiles para el entretenimiento. Para los amantes del audio y la imagen, contamos con audífonos con cancelación de ruido profesional y cámaras fotográficas para capturar cada momento con nitidez. Finalmente, el universo del gaming está presente con las consolas más buscadas, como la PlayStation 5 y la Nintendo Switch, junto a una amplia variedad de accesorios para potenciar tu experiencia de juego en casa.',
    },
    {
      heading: 'Diversión y Movilidad para toda la Familia',
      text: 'Para los momentos de recreación y el desarrollo de los más pequeños, plazaVea ofrece una selección excepcional que combina seguridad y entretenimiento. Fomentamos la actividad física y la aventura con nuestra gama de bicicletas para todas las edades y scooters modernos, ideales para el transporte urbano o el juego al aire libre. La imaginación no tiene límites con nuestra colección de juguetes educativos y de tendencia que garantizan horas de diversión segura. Además, pensando en la comodidad de los padres y el bienestar de los recién nacidos, contamos con coches para bebés ergonómicos y resistentes, diseñados para facilitar cada paseo con la máxima protección.',
    },
  ];
}
