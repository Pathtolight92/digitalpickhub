const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const cards = [...document.querySelectorAll('.product-card')];
const emptyState = document.getElementById('emptyState');

function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;
  let visible = 0;
  cards.forEach(card => {
    const matchesText = (card.dataset.name + ' ' + card.textContent).toLowerCase().includes(query);
    const matchesCategory = category === 'All' || card.dataset.category === category;
    const show = matchesText && matchesCategory;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
}
searchInput.addEventListener('input', filterCards);
categoryFilter.addEventListener('change', filterCards);

document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    categoryFilter.value = card.dataset.filter;
    filterCards();
  });
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
