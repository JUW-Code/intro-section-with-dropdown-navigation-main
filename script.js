// Select hamburger and nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  body.classList.toggle('menu-open');

  // Update aria-expanded for accessibility
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});

// Handle dropdown toggles
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default anchor behavior

    const dropdown = toggle.parentElement;
    dropdown.classList.toggle('active');

    // Update aria-expanded for accessibility
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
  });
});

// Optional: Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// Optional: Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.parentElement;
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      toggle.setAttribute('aria-expanded', false);
    }
  });
});
