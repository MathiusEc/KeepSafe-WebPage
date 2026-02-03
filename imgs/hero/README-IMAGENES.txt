========================================
INSTRUCCIONES PARA IMÁGENES DEL HERO
========================================

CARRUSEL DE IMÁGENES DEL HERO:

1. IMAGEN ACTUAL:
   - imgs/index.png (ya existe)
   - Esta es la primera imagen del carrusel

2. SEGUNDA IMAGEN REQUERIDA:
   - Nombre: hero2.png
   - Ubicación: imgs/hero/hero2.png
   - Dimensiones recomendadas: 1920x1080px
   - Formato: PNG, JPG o WebP
   - Peso máximo: 500KB (optimizada para web)

3. SUGERENCIAS PARA LA SEGUNDA IMAGEN:
   - Otra vista de drones en acción
   - Cultivos desde perspectiva aérea
   - Tecnología agrícola moderna
   - Paisaje rural con tecnología
   - Equipo técnico trabajando

4. OPTIMIZACIÓN:
   - Usar herramientas como TinyPNG.com
   - Mantener calidad visual alta
   - Formato WebP si es posible para mejor compresión

========================================
FUNCIONAMIENTO DEL CARRUSEL:

✅ Cambio automático cada 4 segundos
✅ Transición suave con fade y zoom
✅ Se pausa al hacer hover sobre el hero
✅ Se pausa cuando la página no está visible
✅ Responsive para móviles y tablets

========================================
PERSONALIZACIÓN DISPONIBLE:

Para cambiar la velocidad del carrusel, usar:
window.heroCarousel.setSpeed(6000); // 6 segundos

Para agregar más imágenes:
1. Agregar más <img> en index.html dentro de .hero-carousel
2. Las imágenes se ciclarán automáticamente
========================================