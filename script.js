
// Dark Mode Toggle
document.getElementById('toggleTheme').addEventListener('click', function () {
  document.body.classList.toggle('light');
  this.textContent = document.body.classList.contains('light') ? ' Light Mode' : ' Dark Mode';
});

// Search Filter
document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const cards = document.querySelectorAll('.video-card');

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
});
