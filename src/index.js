const mensajeInput = document.getElementById('string');
mensajeInput.addEventListener('input', () => {
  mensajeInput.value = mensajeInput.value.toUpperCase();
});

