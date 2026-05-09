# Eddie Arango - Portafolio Profesional de Ingeniería

Una vitrina técnica de alto rendimiento construida con **Astro** y **Tailwind CSS**. Este proyecto sirve como prueba de concepto para arquitecturas frontend modernas, con énfasis en el rendimiento, la accesibilidad y la entrega automatizada.

[Read English Version](./README.en.md)

## 🏗️ Decisiones Arquitectónicas

### 1. Arquitectura de Islas (Astro)
Elegí **Astro** para aprovechar su patrón de "hidratación parcial". A diferencia de las SPAs tradicionales (React/Vue), este sitio no envía JavaScript al cliente por defecto. Los elementos interactivos son "islas" aisladas, garantizando un Tiempo de Interactividad (TTI) instantáneo.

### 2. Gestión de Contenido Escalable
El portafolio utiliza **Astro Content Collections**. Los proyectos y casos de éxito se almacenan como archivos Markdown con tipado fuerte. Esto garantiza:
- **Validación Estricta de Esquemas:** Uso de `zod` para asegurar la integridad de los datos.
- **Mantenibilidad:** Añadir un proyecto es tan simple como crear un archivo `.md` sin tocar la lógica de la interfaz.

### 3. Rendimiento y SEO
- **Puntaje Lighthouse:** Optimizado para alcanzar 100/100 en todas las métricas.
- **Optimización de Imágenes:** Procesamiento automatizado de activos mediante el servicio nativo de Astro.

## 🛠️ Stack Tecnológico
- **Framework:** Astro
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Despliegue:** Netlify con CI/CD automatizado.

## 🚀 DevOps y Flujo de Trabajo
Cada `push` a la rama `main` dispara una compilación automática en Netlify, ejecutando pruebas de esquema antes del despliegue a producción.

---
*Desarrollado con un enfoque en la excelencia técnica.*