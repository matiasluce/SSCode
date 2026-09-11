document.addEventListener('DOMContentLoaded', () => {
  const codeInput = document.getElementById('codeInput');
  const codeDisplay = document.getElementById('codeDisplay');
  const languageSelect = document.getElementById('languageSelect');
  const downloadBtn = document.getElementById('downloadBtn');
  const exportCard = document.getElementById('exportCard');
  
  // Elementos de personalización
  const fileNameInput = document.getElementById('fileNameInput');
  const fileNameDisplay = document.getElementById('fileNameDisplay');
  const paddingInput = document.getElementById('paddingInput');
  const paddingValue = document.getElementById('paddingValue');
  const bgOptions = document.getElementById('bgOptions');

  let currentGradient = 'from-indigo-500 via-purple-500 to-pink-500';

  // 1. Actualizar código y resaltado con Prism.js
  function updateCode() {
    const code = codeInput.value;
    const lang = languageSelect.value;

    codeDisplay.className = `language-${lang}`;
    codeDisplay.textContent = code;

    Prism.highlightElement(codeDisplay);
  }

  // 2. Actualizar nombre de archivo en la tarjeta
  function updateFileName() {
    const name = fileNameInput.value.trim();
    fileNameDisplay.textContent = name || 'snippet';
  }

  // 3. Actualizar Padding dinámicamente
  paddingInput.addEventListener('input', (e) => {
    const val = e.target.value;
    exportCard.style.padding = `${val}px`;
    paddingValue.textContent = `${val}px`;
  });

  // 4. Cambiar Fondos Degradados
  bgOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const newGradient = btn.dataset.bg;
    
    // Remover gradiente anterior y aplicar el nuevo
    exportCard.classList.remove(...currentGradient.split(' '));
    exportCard.classList.add(...newGradient.split(' '));
    currentGradient = newGradient;

    // Actualizar anillo indicador de selección
    bgOptions.querySelectorAll('button').forEach(b => b.classList.remove('ring-2', 'ring-indigo-400'));
    btn.classList.add('ring-2', 'ring-indigo-400');
  });

  // Event Listeners
  codeInput.addEventListener('input', updateCode);
  languageSelect.addEventListener('change', updateCode);
  fileNameInput.addEventListener('input', updateFileName);

  // 5. Generar y descargar la captura limpia de barras de scroll
  downloadBtn.addEventListener('click', () => {
    downloadBtn.innerText = 'Generando...';
    downloadBtn.disabled = true;

    // Aplicar clase de expansión al marco principal
    exportCard.classList.add('expand-for-capture');

    const options = {
      pixelRatio: 2,
      style: {
        overflow: 'visible',
      }
    };

    // Dar tiempo al DOM para recalcular estilos antes de capturar
    setTimeout(() => {
      htmlToImage.toPng(exportCard, options)
        .then((dataUrl) => {
          const link = document.createElement('a');
          const filename = fileNameInput.value.trim().replace(/[^a-z0-9.-]/gi, '_') || 'code-snap';
          link.download = `${filename}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error al generar la imagen:', error);
        })
        .finally(() => {
          // Restaurar estado visual original para la previsualización
          exportCard.classList.remove('expand-for-capture');

          downloadBtn.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Descargar Imagen
          `;
          downloadBtn.disabled = false;
        });
    }, 50);
  });

  // Render inicial
  updateCode();
  updateFileName();
});