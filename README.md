# ☕ Cafetería Aroma

Página web moderna y elegante para Cafetería Aroma, desarrollada con **Astro** y diseñada con un enfoque en la experiencia visual y la usabilidad.

## 🌟 Características

- ✨ **Diseño moderno** con gradientes y animaciones suaves
- 🎨 **Tipografía elegante** usando Google Fonts (Playfair Display + Lato)
- 📱 **Totalmente responsive** - Se adapta a cualquier dispositivo
- ⚡ **Rendimiento optimizado** gracias a Astro
- 🎭 **Efectos interactivos** con hover y transiciones
- 🎯 **Navegación intuitiva** con menú sticky

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── img/
│   ├── favicon.png
│   └── styles.css
├── src/
│   ├── components/
│   │   └── Menu.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro        # Página principal
│       ├── productos.astro    # Catálogo de productos
│       └── contacto.astro     # Información de contacto
└── package.json
```

## 📄 Páginas

### 🏠 Inicio (`/`)
- Hero section con bienvenida
- Tarjetas de características (Ingredientes naturales, Preparación artesanal, Ambiente familiar)
- Testimonios de clientes
- Sección de valores
- Call-to-action

### 🛍️ Productos (`/productos`)
- Catálogo completo de productos en cards modernas
- 9 productos destacados (cafés, postres, tés, smoothies)
- Sistema de badges (Popular, Nuevo, Saludable, etc.)
- Sección de extras y personalizaciones

### 📞 Contacto (`/contacto`)
- Información de contacto completa
- Horarios de apertura
- Enlaces a redes sociales
- Preguntas frecuentes (FAQ)
- Call-to-action con botones de contacto

## 🎨 Paleta de Colores

```css
--primary-color: #6f4e37      /* Marrón café */
--secondary-color: #c4a572     /* Beige dorado */
--accent-color: #d4a574        /* Crema dorado */
--dark-brown: #4a3428          /* Marrón oscuro */
--light-cream: #faf6f1         /* Crema claro */
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Construye el sitio para producción en `./dist/`     |
| `npm run preview`         | Vista previa local antes de desplegar               |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                       |

## 🚀 Cómo Empezar

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/eloypgweb/CafeteriaAroma.git
   cd CafeteriaAroma
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:4321`

## 📦 Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework web moderno
- **Google Fonts** - Tipografía (Playfair Display, Lato)
- **CSS3** - Estilos con gradientes, animaciones y flexbox/grid
- **HTML5** - Estructura semántica

## 🎯 Características Destacadas

- **Animaciones CSS**: fadeIn, slideDown, bounce, rotate
- **Menú sticky**: Permanece visible al hacer scroll
- **Cards interactivas**: Efectos hover en productos y características
- **Gradientes personalizados**: Diferentes colores para cada categoría de producto
- **Footer informativo**: Información completa de contacto y horarios
- **Diseño accesible**: Contraste de colores optimizado

## 📝 Licencia

Este proyecto es de uso educativo.

---

**Desarrollado con ❤️ y mucho ☕**
