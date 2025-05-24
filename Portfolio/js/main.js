// Theme Toggle with Icon Swap
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  const icon = themeToggle.querySelector('i');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  
  if (isDark) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
  
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Hamburger Menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('change', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
    navMenu.classList.remove('active');
  });
});

// Scroll Animations (AOS-like)
const animateOnScroll = () => {
  document.querySelectorAll('[data-aos]').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initial animation styles
document.querySelectorAll('[data-aos]').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
