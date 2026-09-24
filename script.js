const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const cartCount = document.querySelector('#cartCount');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

let cartItems = Number(localStorage.getItem('sharonsBeautyCart') || 0);
function updateCart() {
  if (cartCount) cartCount.textContent = cartItems;
  localStorage.setItem('sharonsBeautyCart', cartItems);
}
updateCart();

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    cartItems += 1;
    updateCart();
    const originalText = button.innerHTML;
    button.innerHTML = 'Added to Cart <span>✓</span>';
    button.style.background = '#dfe8dc';
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
    }, 1400);
  });
});

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formMessage = document.querySelector('#formMessage');
    formMessage.textContent = 'Thank you! Your message has been received.';
    contactForm.reset();
  });
}
