const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');
const contactForm = document.getElementById('contactForm');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('input[name="name"]').value?.trim() || 'Client';
    const email = contactForm.querySelector('input[name="email"]').value?.trim() || '';
    const org = contactForm.querySelector('input[name="organisation"]').value?.trim() || 'Organisation';
    const message = contactForm.querySelector('textarea[name="message"]').value?.trim() || '';

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganisation: ${org}\nEmail: ${email}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:hello@azahnsolutions.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}
