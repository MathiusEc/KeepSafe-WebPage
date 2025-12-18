# 🚀 Guía Rápida de Edición - DroneAgro (Para Desarrollador)

## ⚡ Atajos VS Code para editar rápido en reuniones:

### 1️⃣ Buscar todos los "EDITAR:" en el proyecto
```
Ctrl + Shift + F
Buscar: EDITAR:
```
**Resultado:** Verás TODOS los textos que necesitas modificar con datos del cliente.

### 2️⃣ Reemplazar textos repetidos en todas las páginas
```
Ctrl + Shift + H (Replace in Files)
Buscar: EDITAR: Nombre Empresa
Reemplazar: NombreReal S.A.
Click en "Replace All"
```

### 3️⃣ Multi-cursor para editar varias líneas a la vez
```
Alt + Click en cada línea
O seleccionar texto y Ctrl + D para siguiente coincidencia
```

---

## 📂 Estructura de Carpetas y Archivos

### Imágenes (carpeta `imgs/`)
```
imgs/
├── logo.svg (o .png con fondo transparente)
├── favicon.ico (32x32px)
├── og-image.jpg (1200x630px para redes sociales)
├── twitter-card.jpg (1200x600px para Twitter)
│
├── servicios/
│   ├── servicio-1.jpg (800x600px)
│   ├── servicio-2.jpg
│   ├── servicio-3.jpg
│   └── servicio-4.jpg
│
├── equipo/
│   ├── persona-1.jpg (400x400px, cuadrada)
│   ├── persona-2.jpg
│   ├── persona-3.jpg
│   └── persona-4.jpg
│
├── testimonios/
│   ├── cliente-1.jpg (300x300px, cuadrada)
│   ├── cliente-2.jpg
│   └── cliente-3.jpg
│
├── casos-exito/
│   ├── caso-1.jpg (800x600px)
│   ├── caso-2.jpg
│   └── caso-3.jpg
│
└── tecnologia/
    ├── dron-1.jpg
    └── dron-2.jpg
```

### Videos (carpeta `media/`)
```
media/
├── hero-video.mp4 (Video de fondo Hero - 1920x1080, máx 20MB, H.264)
└── testimonial-video.mp4 (Opcional)
```

---

## 📝 Checklist de Datos a Pedir al Cliente

### ℹ️ Información Básica:
- [ ] Nombre de la empresa
- [ ] Eslogan/Tagline
- [ ] Descripción breve (1-2 líneas)
- [ ] Año de fundación / Años de experiencia

### 📞 Contactos:
- [ ] Teléfono principal
- [ ] Email de contacto
- [ ] Dirección física completa
- [ ] Horarios de atención

### 📊 Estadísticas (para la barra de números):
- [ ] Hectáreas procesadas / Proyectos completados
- [ ] Número de clientes
- [ ] Drones en flota / Equipos
- [ ] Años de experiencia

### 🌐 Redes Sociales:
- [ ] URL YouTube
- [ ] URL Instagram
- [ ] URL TikTok
- [ ] URL Facebook
- [ ] URL LinkedIn (si aplica)

### 👥 Equipo (3-4 personas):
Para cada persona:
- [ ] Nombre completo
- [ ] Cargo
- [ ] Foto (400x400px)
- [ ] Biografía corta (2-3 líneas)

### 💬 Testimonios (3-5 clientes):
Para cada testimonio:
- [ ] Nombre del cliente
- [ ] Cargo/Empresa
- [ ] Texto del testimonio (2-3 líneas)
- [ ] Foto (300x300px)
- [ ] Calificación (estrellas)

### 📦 Servicios (4-6 servicios):
Para cada servicio:
- [ ] Nombre del servicio
- [ ] Descripción breve (2-3 líneas)
- [ ] Descripción extensa (para página servicios.html)
- [ ] Precio (opcional)
- [ ] Beneficios clave (3-5 puntos)
- [ ] Foto representativa (800x600px)

### ❓ Preguntas Frecuentes (6-8 preguntas):
Para cada FAQ:
- [ ] Pregunta
- [ ] Respuesta detallada

### 🖼️ Imágenes Clave:
- [ ] Logo (SVG o PNG transparente)
- [ ] Favicon (32x32px .ico)
- [ ] Imagen Open Graph (1200x630px)
- [ ] Video Hero (MP4, 1920x1080, máx 20MB)

---

## 🎯 Workflow Típico en Reunión con Cliente:

### ANTES de la reunión:
1. ✅ Abrir VS Code con el proyecto
2. ✅ Abrir `_GUIA_RAPIDA_EDICION.md` (este archivo)
3. ✅ Tener Chrome abierto en `index.html` (Live Server)
4. ✅ Carpeta `imgs/` lista para recibir archivos
5. ✅ Tener checklist impresa o en segunda pantalla

### DURANTE la reunión:
1. **Pedir datos en orden:**
   - Nombre empresa → `Ctrl+Shift+H` → Buscar "EDITAR: Nombre Empresa" → Reemplazar todo
   - Redes sociales → Buscar "EDITAR: URL YouTube" → Reemplazar
   - Contactos → Buscar "EDITAR: Cargo Contacto 1" → Reemplazar uno por uno

2. **Recibir imágenes:**
   - Cliente envía por email/WhatsApp
   - Descargar y renombrar según estructura:
     - `logo-cliente.png` → `imgs/logo.svg`
     - `foto-juan.jpg` → `imgs/equipo/persona-1.jpg`

3. **Vista previa inmediata:**
   - `Ctrl+S` (guardar)
   - `Alt+Tab` (cambiar a Chrome)
   - `F5` (refrescar navegador)
   - Mostrar al cliente en pantalla compartida

4. **Ir sección por sección:**
   - Hero → Servicios → Testimonios → FAQs → Footer

### DESPUÉS de la reunión:
1. ✅ Guardar todo (`Ctrl+K, S` - Save All)
2. ✅ Probar navegación completa
3. ✅ Verificar que todas las imágenes carguen
4. ✅ Revisar responsive (F12 → Device Toolbar)
5. ✅ Commit a Git: `git commit -m "Cliente: Datos reales añadidos"`

---

## 🔍 Dónde Editar Cada Cosa:

### 📄 index.html

| Sección | Buscar | Qué editar |
|---------|--------|------------|
| **SEO** | `⚙️ EDITAR: SEO Básico` | Title, description, keywords |
| **Logo** | `⚙️ EDITAR: Logo` | Imagen logo empresa |
| **Hero Título** | `⚙️ EDITAR: Título Principal` | H1 principal |
| **Hero Video** | `⚙️ EDITAR: Video de fondo` | Video background |
| **Estadísticas** | `⚙️ EDITAR: Estadística` | 4 números con labels |
| **Servicios** | `⚙️ EDITAR: Servicio 1` | 4 servicios con imagen |
| **Testimonios** | `⚙️ EDITAR: Testimonio 1` | 3 testimonios con foto |
| **FAQs** | `⚙️ EDITAR: FAQ 1` | 6 preguntas y respuestas |
| **Footer Redes** | `⚙️ EDITAR: Redes Sociales` | URLs de redes |
| **Footer Contacto** | `⚙️ EDITAR: Contacto 1` | 3 contactos con teléfonos |

### 📄 servicios.html
*(Aplicar misma lógica que index.html)*

### 📄 nosotros.html
- Buscar: `⚙️ EDITAR:` para encontrar textos
- Secciones: Misión, Visión, Valores, Equipo

### 📄 testimonios.html
- Buscar: `⚙️ EDITAR:` 
- Secciones: Casos de éxito, Testimonios expandidos

---

## 🎨 Colores de Marca (si el cliente quiere personalizar)

**Ubicación:** `styles.css` líneas ~37-81

```css
:root {
    /* ⚙️ EDITAR: Colores de marca */
    --color-primary: #1E5F9E;    /* Azul principal */
    --color-cta: #D96B2A;        /* Naranja botones */
    --color-success: #4CAF50;    /* Verde éxito */
    --color-text: #333333;       /* Texto principal */
}
```

**Cómo cambiar:**
1. Cliente muestra colores de su marca
2. Usar Color Picker (Google "color picker") para obtener código HEX
3. Reemplazar valores en `styles.css`
4. Guardar y refrescar navegador

---

## 🔗 Centralizar Redes Sociales

**Problema:** Redes sociales aparecen en Footer de TODAS las páginas.

**Solución:** Buscar y reemplazar en todos los archivos:

```
Ctrl + Shift + H (Replace in Files)

Buscar: EDITAR: URL YouTube
Reemplazar: https://youtube.com/@clienteReal

Buscar: EDITAR: URL Instagram
Reemplazar: https://instagram.com/clienteReal

Buscar: EDITAR: URL TikTok
Reemplazar: https://tiktok.com/@clienteReal

Buscar: EDITAR: URL Facebook
Reemplazar: https://facebook.com/clienteReal
```

---

## 📐 Tamaños de Imágenes Recomendados

| Tipo | Tamaño | Formato | Peso máx |
|------|--------|---------|----------|
| Logo | Variable | SVG o PNG transparente | 100KB |
| Favicon | 32x32px | ICO | 10KB |
| Open Graph | 1200x630px | JPG | 200KB |
| Hero/Banner | 1920x1080px | JPG | 500KB |
| Servicios | 800x600px | JPG | 200KB |
| Equipo | 400x400px | JPG cuadrada | 100KB |
| Testimonios | 300x300px | JPG cuadrada | 80KB |
| Video Hero | 1920x1080px | MP4 (H.264) | 20MB |

### Herramientas para optimizar imágenes:
- **Online:** TinyPNG (https://tinypng.com)
- **Photoshop:** Export > Save for Web
- **GIMP:** Export > JPG quality 85%

---

## ⚙️ Comandos Git Útiles

```bash
# Ver qué archivos cambiaron
git status

# Ver diferencias
git diff index.html

# Guardar cambios
git add .
git commit -m "Cliente: Agregados datos reales"

# Volver a versión anterior (si algo sale mal)
git checkout index.html.bak
```

---

## 🚨 Errores Comunes y Soluciones

### ❌ "La imagen no aparece"
**Causas:**
- Nombre de archivo incorrecto (mayúsculas/minúsculas)
- Ruta incorrecta (`imgs\logo.svg` en lugar de `imgs/logo.svg`)
- Formato no soportado (usar JPG, PNG, SVG)

**Solución:**
```
1. F12 en Chrome → Console → Ver error exacto
2. Verificar ruta en VS Code
3. Verificar que archivo existe en carpeta imgs/
```

### ❌ "El video no se reproduce"
**Causas:**
- Formato incorrecto (debe ser MP4 con codec H.264)
- Archivo muy pesado (>20MB)

**Solución:**
```
1. Usar HandBrake para convertir a MP4
2. Ajustes: H.264, 1920x1080, 30fps
3. Comprimir a <20MB
```

### ❌ "Los cambios no se ven en el navegador"
**Solución:**
```
1. Ctrl+Shift+R (Hard refresh con limpieza de caché)
2. Verificar que guardaste el archivo (Ctrl+S)
3. F12 → Network → Disable cache → F5
```

### ❌ "Se rompió el layout"
**Solución:**
```
1. Verificar que no eliminaste etiquetas de cierre (</div>)
2. F12 → Console → Ver errores HTML
3. Si todo falla: restaurar desde backup .bak
```

---

## 📋 Plantilla de Email para Pedir Datos al Cliente

```
Asunto: Información necesaria para finalizar tu sitio web

Hola [Nombre Cliente],

Para completar tu sitio web necesito la siguiente información:

📌 DATOS BÁSICOS:
- Nombre oficial de la empresa
- Descripción breve (1-2 líneas)
- Teléfono y email de contacto
- Dirección física completa

🌐 REDES SOCIALES (URLs completas):
- YouTube
- Instagram
- TikTok
- Facebook

📊 ESTADÍSTICAS (para la sección de números):
- Hectáreas procesadas / Proyectos completados
- Número de clientes satisfechos
- Drones/equipos en tu flota
- Años de experiencia

👥 EQUIPO (3-4 personas clave):
Para cada persona necesito:
- Nombre completo
- Cargo
- Foto profesional (buena calidad)
- Biografía corta (2-3 líneas)

💬 TESTIMONIOS (3-5 clientes):
- Nombre del cliente
- Empresa/cargo
- Testimonio (2-3 líneas)
- Foto (si es posible)

🖼️ IMÁGENES:
- Logo (preferible en formato SVG o PNG con fondo transparente)
- Fotos de tus servicios (4-6 fotos de buena calidad)
- Video para el fondo de la página principal (opcional pero recomendado)

Por favor, envía todo en un ZIP o por WeTransfer si son archivos pesados.

Quedamos programados para el [FECHA] a las [HORA] para trabajar en vivo.

Saludos,
[Tu Nombre]
```

---

## 🎯 Tips para Reuniones Productivas

### ✅ HACER:
- Compartir pantalla mostrando los cambios en tiempo real
- Pedir datos en orden lógico (de arriba hacia abajo del sitio)
- Guardar y refrescar constantemente para mostrar progreso
- Pedir que envíen archivos DURANTE la reunión si falta algo
- Tomar notas de cambios solicitados

### ❌ NO HACER:
- No editar código complejo mientras el cliente mira
- No prometer "lo termino después" si puedes hacerlo ahora
- No mostrar archivos de código (solo el resultado visual)
- No usar términos técnicos innecesarios

---

## 📞 Soporte Técnico

Si algo no funciona:

1. **F12 en Chrome** → Ver errores en Console
2. **Revisar backups** → Restaurar archivos .bak si es necesario
3. **Git checkout** → Volver a versión anterior
4. **Stack Overflow** → Buscar error específico

---

## ✅ Checklist Final Antes de Entregar

- [ ] Todas las imágenes cargan correctamente
- [ ] Todos los textos "EDITAR:" fueron reemplazados
- [ ] Redes sociales funcionan (abren en nueva pestaña)
- [ ] Teléfonos funcionan (abren marcador en móvil)
- [ ] Navegación entre páginas funciona
- [ ] Responsive funciona en móvil (F12 → Device Toolbar)
- [ ] Favicon aparece en pestaña del navegador
- [ ] Video hero se reproduce automáticamente
- [ ] FAQs se abren y cierran correctamente
- [ ] Footer aparece en todas las páginas
- [ ] Copyright tiene año actual (2025)
- [ ] SEO titles y descriptions están personalizados
- [ ] No hay enlaces rotos (#)

---

## 📚 Recursos Adicionales

- **Banco de imágenes gratis:** Unsplash, Pexels
- **Generador de favicons:** https://favicon.io
- **Validador HTML:** https://validator.w3.org
- **Test responsive:** https://responsivedesignchecker.com
- **Compresor de imágenes:** https://tinypng.com
- **Conversor de video:** HandBrake (app gratuita)

---

## 💾 Backups y Seguridad

### Archivos de backup creados:
- `index.html.bak`
- `servicios.html.bak`
- `nosotros.html.bak`
- `testimonios.html.bak`

### Para restaurar un backup:
```bash
# Opción 1: PowerShell
Copy-Item "index.html.bak" "index.html" -Force

# Opción 2: Renombrar en VS Code
# Click derecho en archivo → Rename
```

---

**🎉 ¡Listo! Con esta guía puedes editar el sitio completo en menos de 1 hora durante la reunión con el cliente.**

---

*Última actualización: Diciembre 2025*
*Versión: 1.0*
