# Atlas de Histología — UCV
## Universidad Central de Venezuela · Cátedra de Histología y Embriología

---

## 🚀 Instalación y arranque

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build
```

---

## 🖼️ Dónde colocar las imágenes

**Todas las imágenes van en:** `public/assets/`

El proyecto espera los siguientes nombres de archivo exactos:

### Aparato Digestivo
| Archivo | Lámina |
|---|---|
| `digestivo-lengua.jpg` | Cavidad Oral — Lengua |
| `digestivo-mucosa-oral.jpg` | Cavidad Oral — Mucosa Oral |
| `digestivo-esofago.jpg` | Esófago |
| `digestivo-estomago.jpg` | Estómago |
| `digestivo-intestino-delgado.jpg` | Intestino Delgado |
| `digestivo-placas-peyer.jpg` | Placas de Peyer |
| `digestivo-intestino-grueso.jpg` | Intestino Grueso |
| `digestivo-ano.jpg` | Ano |

### Aparato Reproductor Femenino
| Archivo | Lámina |
|---|---|
| `reproductivo-f-ovario.jpg` | Ovario — Folículos |
| `reproductivo-f-endometrio.jpg` | Útero — Fases del Endometrio |
| `reproductivo-f-cuello-uterino.jpg` | Cuello Uterino |
| `reproductivo-f-union-escamo-columnar.jpg` | Unión Escamo-Columnar |
| `reproductivo-f-vagina.jpg` | Vagina |
| `reproductivo-f-mama.jpg` | Glándula Mamaria |

### Aparato Reproductor Masculino
| Archivo | Lámina |
|---|---|
| `reproductivo-m-testiculo.jpg` | Testículo — Túnica Albugínea |
| `reproductivo-m-epididimo.jpg` | Epidídimo |
| `reproductivo-m-cordon.jpg` | Cordón Espermático |
| `reproductivo-m-prostata.jpg` | Próstata — Cuerpos Amiláceos |
| `reproductivo-m-pene.jpg` | Pene |

### Aparato Urinario
| Archivo | Lámina |
|---|---|
| `urinario-vejiga.jpg` | Vejiga Urinaria |
| `urinario-rinon.jpg` | Riñón — Corpúsculo Renal |
| `urinario-glomerulo-macula.jpg` | Glomérulo, Cápsula de Bowman y Mácula Densa |
| `urinario-uretra.jpg` | Uretra |

### Ojo
| Archivo | Lámina |
|---|---|
| `ojo-cornea.jpg` | Córnea |
| `ojo-retina.jpg` | Retina |
| `ojo-cristalino.jpg` | Cristalino |

---

## 📁 Estructura del Proyecto

```
histologia-atlas/
├── public/
│   ├── assets/           ← 📍 AQUÍ VAN TUS IMÁGENES
│   │   ├── digestivo-lengua.jpg
│   │   ├── digestivo-estomago.jpg
│   │   └── ... (ver tabla arriba)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Header + Footer globales
│   │   └── ImagePlaceholder.jsx  # Componente de imagen con fallback
│   ├── data/
│   │   └── histologyData.js # ← Todo el contenido médico
│   ├── pages/
│   │   ├── HomePage.jsx     # Dashboard con tarjetas de sistemas
│   │   └── SystemPage.jsx   # Vista de sistema con láminas
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 💡 Notas

- Si una imagen no existe, el sistema muestra automáticamente un **placeholder** con la ruta esperada.
- Una vez que coloques las imágenes en `public/assets/`, se cargarán automáticamente sin cambiar ningún código.
- Las imágenes pueden ser `.jpg`, `.jpeg`, `.png` o `.webp` (ajusta la extensión en `histologyData.js` si usas otro formato).
