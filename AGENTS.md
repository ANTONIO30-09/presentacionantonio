# AGENTS.md — Portafolio Personal Angular 22

## 🎯 Propósito

Portafolio personal desarrollado con **Angular 22** y **Bootstrap 5.3**, basado en el template [iPortfolio de BootstrapMade](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/). Muestra proyectos, habilidades, experiencia y datos de contacto de Antonio Vicente García Corrales.

## 🛠️ Stack Tecnológico

- **Framework:** Angular 22 (standalone components, signals)
- **UI:** Bootstrap 5.3 (via SCSS)
- **Lenguajes:** TypeScript 5.x, SCSS, HTML5
- **Animaciones:** AOS (Animate On Scroll)
- **Carrusel:** SwiperJS
- **Filtros:** Isotope Layout
- **Iconos:** Bootstrap Icons, Boxicons, Remixicon, Devicon
- **Fuentes:** Poppins, Raleway, Open Sans, Playfair Display

## 📁 Estructura del Proyecto

src/
├── app/
│ ├── components/
│ │ ├── header/ # Sidebar de navegación
│ │ ├── hero/ # Sección de presentación
│ │ ├── about/ # Sobre mí
│ │ ├── skills/ # Habilidades (barras de progreso)
│ │ ├── portfolio/ # Proyectos con enlaces a GitHub
│ │ ├── contact/ # Información de contacto
│ │ └── footer/ # Pie de página
│ ├── services/
│ │ └── init.service.ts
│ ├── app.component.ts
│ ├── app.routes.ts
│ └── app.config.ts
├── assets/
│ ├── css/ # main.css del template original
│ ├── img/ # Imágenes personales optimizadas
│ ├── js/ # Scripts del template original
│ └── vendor/ # Librerías de terceros (Bootstrap, AOS, etc.)
└── styles/
├── _variables.scss
├── _components.scss
├── _utilities.scss
└── styles.scss # Punto de entrada de estilos

## ⌨️ Comandos Disponibles

| Comando | Descripción |
|---|---|
| `ng serve` | Servidor de desarrollo en `http://localhost:4200` |
| `ng build` | Compila para producción en `dist/` |
| `ng build --configuration production --base-href "/presentacionantonio/"` | Build con base-href para GitHub Pages |
| `ng test` | Pruebas unitarias con Karma |
| `ng generate component <nombre> --standalone` | Crea nuevo componente standalone |

## 🎨 Estilo de Código

- **Componentes:** Siempre usar `standalone: true`
- **Estado:** Preferir `signal()` y `computed()` sobre propiedades simples
- **Control Flow:** Usar `@for`, `@if`, `@switch` (no `*ngFor`, `*ngIf`)
- **Inyección:** Usar `inject()` en lugar de constructor injection
- **Nombres:** Componentes en PascalCase, archivos en kebab-case
- **SCSS:** Variables y mixins en archivos separados dentro de `styles/`

## 🚫 Límites

- **NO** modificar archivos en `node_modules/`
- **NO** hardcodear URLs de imágenes (usar `assets/`)
- **NO** usar `*ngIf` / `*ngFor` (usar `@if` / `@for`)
- **NO** crear NgModules (usar standalone)
- **NO** commitear archivos `.env` o secretos

## 🚀 Flujo de Trabajo

1. Crear rama: `git checkout -b feat/nombre-feature`
2. Hacer cambios
3. Verificar: `ng build`
4. Commit: `git commit -m "feat: descripción"`
5. Push: `git push origin feat/nombre-feature`
6. Crear Pull Request

## 📚 Recursos

- [Documentación Angular 22](https://angular.dev)
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/)
- [Template iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/)
- [Devicon (iconos de tecnologías)](https://devicon.dev/)
