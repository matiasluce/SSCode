# 📸 SSCode

Una aplicación web moderna, rápida y liviana para convertir tus fragmentos de código (HTML, CSS, JS, Python) en capturas de pantalla estilizadas y elegantes, perfectas para compartir en redes sociales, blogs o documentación.

![SSCode Preview](https://raw.githubusercontent.com/tu-usuario/sscode/main/preview.png) <!-- Reemplazá este enlace por una captura real de tu app -->

---

## 🚀 Características

- 🎨 **Sintaxis Resaltada:** Soporte para JavaScript, Python, HTML y CSS mediante Prism.js.
- 🎨 **Fondos Degradados:** Cambio de paleta de colores del marco con un solo clic.
- 📏 **Padding Adaptable:** Slider en tiempo real para ajustar el espaciado alrededor del código.
- 💻 **Estilo macOS:** Interfaz elegante con botones de control de ventana y nombre de archivo editable.
- ⚡ **Sin Server (100% Frontend):** Todo el procesamiento ocurre en el navegador de forma privada e instantánea.
- 🔍 **Exportación Limpia:** Capturas en alta resolución en formato PNG sin barras de scroll visibles.

---

## 🛠️ Stack Tecnológico

- **HTML5 & CSS3**
- **Tailwind CSS** (vía CDN para utilidades de diseño rápido)
- **JavaScript (Vanilla ES6+)**
- **[Prism.js](https://prismjs.com/)** (Para el resaltado de sintaxis)
- **[html-to-image](https://github.com/bubkoo/html-to-image)** (Para renderizar el DOM como imagen PNG)

---

## 📁 Estructura del Proyecto

```text
sscode/
├── index.html     # Estructura principal de la aplicación
├── style.css      # Estilos personalizados y ajustes para la captura
├── app.js         # Lógica de renderizado, eventos y descarga
├── favicon.svg    # Icono de la pestaña del navegador
└── README.md      # Documentación del proyecto