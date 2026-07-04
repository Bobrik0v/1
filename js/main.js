// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});

// Закрывать меню после клика по ссылке
nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    burger.classList.remove('is-open');
    nav.classList.remove('is-open');
  }
});

// Форма заявки: простая проверка полей и сообщение об успехе.
// Чтобы заявки реально отправлялись, подключите сервис вроде Formspree
// или свой бэкенд в обработчике ниже.
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    const empty = field.value.trim() === '';
    field.classList.toggle('is-invalid', empty);
    if (empty) valid = false;
  });

  if (!valid) return;

  success.hidden = false;
  form.querySelectorAll('input, textarea').forEach((f) => (f.value = ''));
  setTimeout(() => {
    success.hidden = true;
  }, 5000);
});
