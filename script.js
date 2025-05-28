// Funcionalidad de búsqueda en tiempo real
document.getElementById('search').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase(); // Obtiene el texto ingresado
  const cards = document.querySelectorAll('.card'); // Selecciona todas las tarjetas
  cards.forEach(card => {
    const text = card.innerText.toLowerCase(); // Contenido de la tarjeta
    // Muestra u oculta dependiendo de si incluye la búsqueda
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Evento de envío del formulario de contacto
document.getElementById('contactoForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Previene el envío real del formulario
  alert('Su mensaje ha sido enviado al administrador.'); // Mensaje al usuario
  this.reset(); // Limpia los campos del formulario
});
