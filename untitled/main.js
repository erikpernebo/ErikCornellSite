// Toggle mobile menu
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('hidden');
};

document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
