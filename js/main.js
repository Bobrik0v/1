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

// Аккордеон материалов: раскрытие карточки по клику
document.querySelectorAll('.material__head').forEach((head) => {
  head.addEventListener('click', () => {
    const card = head.closest('.material');
    const open = card.classList.toggle('is-open');
    head.setAttribute('aria-expanded', open);
  });
});

// Форма заявки: классическая отправка на formsubmit.co (action в HTML),
// после отправки сервис возвращает на сайт с ?sent=1
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

if (new URLSearchParams(window.location.search).has('sent')) {
  success.hidden = false;
  history.replaceState(null, '', window.location.pathname + '#contact');
  document.getElementById('contact').scrollIntoView();
}

form.addEventListener('submit', (e) => {
  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    const empty = field.value.trim() === '';
    field.classList.toggle('is-invalid', empty);
    if (empty) valid = false;
  });
  if (!valid) e.preventDefault();
});
