// Footer year
document.getElementById('year').textContent = new Date().getFullYear();


// Smooth scroll for in‑page anchors
for (const a of document.querySelectorAll('a[href^="#"]')) {
    a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Active link highlighting based on scroll
const navLinks = document.querySelectorAll('.nav-link');
const observedSections = [];
navLinks.forEach(link => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) observedSections.push(target);
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 });
  observedSections.forEach(sec => observer.observe(sec));
}
// Default active state
const homeLink = document.querySelector('.nav-link[href="#home"]');
if (homeLink) homeLink.classList.add('active');