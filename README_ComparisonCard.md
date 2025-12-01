# ComparisonCard Component

Componente reutilizable de Astro para mostrar comparaciones visuales entre dos o más elementos (productos, servicios, planes, etc.).

## Características

- ✅ Comparación visual de múltiples elementos
- ✅ Soporte para 2 o más items
- ✅ Sistema de badges para destacar opciones
- ✅ Lista de características con iconos de check/cross
- ✅ Opción de resaltar un elemento (highlighted)
- ✅ Soporte para imágenes, precios y botones CTA
- ✅ Diseño responsive con grid de Tailwind
- ✅ Animaciones y efectos hover
- ✅ Completamente tipado con TypeScript

## Props

### ComparisonCard

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `items` | `ComparisonItem[]` | Sí | Array de elementos a comparar |
| `title` | `string` | No | Título principal de la comparación |
| `description` | `string` | No | Descripción de la comparación |

### ComparisonItem

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `title` | `string` | Sí | Título del elemento |
| `subtitle` | `string` | No | Subtítulo descriptivo |
| `price` | `string` | No | Precio del elemento |
| `priceNote` | `string` | No | Nota adicional del precio (ej: "por mes") |
| `image` | `string` | No | URL de la imagen |
| `badge` | `string` | No | Texto del badge (ej: "Popular", "Mejor valor") |
| `highlighted` | `boolean` | No | Si es `true`, el elemento se destacará visualmente |
| `features` | `Feature[]` | Sí | Array de características |
| `buttonText` | `string` | No | Texto del botón de acción |
| `buttonLink` | `string` | No | URL del botón de acción |

### Feature

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `name` | `string` | Sí | Nombre de la característica |
| `included` | `boolean` | Sí | Si la característica está incluida (✓) o no (✗) |
| `value` | `string` | No | Valor opcional para mostrar detalles específicos |

## Ejemplo de Uso

### Comparación básica de 2 productos

```astro
---
import ComparisonCard from "../components/ComparisonCard.astro";

const coffeeTypes = [
  {
    title: "Arábica",
    subtitle: "Suave y aromático",
    features: [
      { name: "Dulzor natural", included: true },
      { name: "Acidez alta", included: true },
      { name: "Cafeína alta", included: false }
    ]
  },
  {
    title: "Robusta",
    subtitle: "Fuerte e intenso",
    features: [
      { name: "Dulzor natural", included: false },
      { name: "Acidez alta", included: false },
      { name: "Cafeína alta", included: true }
    ]
  }
];
---

<ComparisonCard items={coffeeTypes} />
```

### Comparación con título y elemento destacado

```astro
---
const subscriptionPlans = [
  {
    title: "Plan Básico",
    price: "€15",
    priceNote: "por mes",
    features: [
      { name: "Café mensual", included: true, value: "250g" },
      { name: "Envío gratis", included: false }
    ],
    buttonText: "Comenzar"
  },
  {
    title: "Plan Premium",
    price: "€35",
    priceNote: "por mes",
    badge: "Más popular",
    highlighted: true,
    features: [
      { name: "Café mensual", included: true, value: "500g" },
      { name: "Envío gratis", included: true }
    ],
    buttonText: "Suscribirse"
  }
];
---

<ComparisonCard 
  title="Planes de Suscripción"
  description="Recibe café de especialidad en tu casa"
  items={subscriptionPlans}
/>
```

### Comparación con imágenes

```astro
---
const brewingMethods = [
  {
    title: "Espresso",
    subtitle: "Método italiano",
    image: "https://example.com/espresso.jpg",
    price: "€2.50",
    priceNote: "por taza",
    features: [
      { name: "Intensidad", included: true, value: "Muy alta" },
      { name: "Tiempo", included: true, value: "25-30 seg" }
    ],
    buttonText: "Pedir Espresso",
    buttonLink: "/contacto"
  },
  {
    title: "V60",
    subtitle: "Pour over japonés",
    image: "https://example.com/v60.jpg",
    price: "€3.50",
    priceNote: "por taza",
    badge: "Recomendado",
    highlighted: true,
    features: [
      { name: "Intensidad", included: true, value: "Media-Alta" },
      { name: "Tiempo", included: true, value: "3-4 min" }
    ],
    buttonText: "Probar V60",
    buttonLink: "/contacto"
  }
];
---

<ComparisonCard 
  title="Métodos de Preparación"
  items={brewingMethods}
/>
```

## Características Visuales

### Layout Responsive
- **Mobile (1 columna)**: Todas las tarjetas apiladas verticalmente
- **Tablet (2 columnas)**: Comparación lado a lado para 2 items
- **Desktop (3 columnas)**: Grid completo para 3+ items

### Elemento Destacado (highlighted)
Cuando `highlighted: true`:
- Anillo dorado alrededor de la tarjeta
- Escala ligeramente mayor (105% en tablet, 110% en desktop)
- Botón con gradiente principal en lugar de secundario

### Badge
- Posicionado en la esquina superior derecha
- Gradiente de color secundario
- Animación de pulso sutil
- Perfecto para "Popular", "Recomendado", "Mejor valor", etc.

### Iconos de Características
- ✓ (Check verde) para características incluidas
- ✗ (X gris) para características no incluidas
- Texto tachado para features no incluidos

### Efectos Hover
- Elevación de la tarjeta con `translateY`
- Sombra expandida
- Zoom en imágenes (110%)

## Estilos Personalizables

El componente utiliza las clases de Tailwind del tema personalizado:
- Colores: `primary`, `secondary`, `cream`
- Fuentes: `font-serif` para títulos
- Sombras: `shadow-xl`, `shadow-2xl`
- Transiciones: `duration-300`, `duration-500`

## Casos de Uso

1. **Comparación de productos**: Diferentes tipos de café, tamaños, orígenes
2. **Planes de precios**: Básico vs Premium vs Experto
3. **Métodos de preparación**: Espresso vs V60 vs French Press
4. **Servicios**: Diferentes paquetes o niveles de servicio
5. **Localizaciones**: Diferentes sucursales o tiendas
6. **Equipos o herramientas**: Comparación de equipamiento

## Notas

- Recomendado usar 2-3 items para mejor legibilidad en desktop
- Puedes usar hasta 4+ items, pero considera el espacio disponible
- El elemento `highlighted` solo debe usarse en uno de los items
- Los valores de `features` son opcionales y aparecen en color secundario
- Las imágenes son opcionales pero mejoran la presentación visual

## Integración con Astro

Este componente es 100% compatible con Astro y no requiere JavaScript del lado del cliente. Todas las interacciones visuales se manejan con CSS puro.

```astro
---
import ComparisonCard from "../components/ComparisonCard.astro";
import BaseLayout from "../layouts/BaseLayout.astro";

// Define tus datos de comparación aquí
const comparisonData = [...];
---

<BaseLayout title="Comparativa">
  <ComparisonCard items={comparisonData} />
</BaseLayout>
```
