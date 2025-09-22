document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el botón de alternar y la barra lateral
  const toggleButton = document.querySelector('.toggle-sidebar');
  const sidebar = document.querySelector('.Sidebar');
  const mainFeed = document.querySelector('.main-feed');

  if (toggleButton && sidebar && mainFeed) {
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      mainFeed.classList.toggle('overlay');
    });
  } else {
    console.error('No se encontraron los elementos necesarios para alternar la barra lateral.');
  }
});
