const form = document.querySelector('#quoteForm');
const message = document.querySelector('#formMessage');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    message.hidden = false;
    message.textContent = 'Thank you! We will contact you shortly with your quote.';
    form.reset();
  });
}
