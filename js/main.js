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

// Форма заявки: отправка на почту через Web3Forms
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
const errorMsg = document.getElementById('formError');
const submitBtn = form.querySelector('button[type="submit"]');

// Если JavaScript выключен, форма уходит обычным POST и сервис
// возвращает посетителя на сайт с ?sent=1 — показываем «спасибо»
if (new URLSearchParams(window.location.search).has('sent')) {
  success.hidden = false;
  history.replaceState(null, '', window.location.pathname + '#contact');
  document.getElementById('contact').scrollIntoView();
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    const empty = field.value.trim() === '';
    field.classList.toggle('is-invalid', empty);
    if (empty) valid = false;
  });
  if (!valid) return;

  success.hidden = true;
  errorMsg.hidden = true;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Отправляем…';

  try {
    const data = new FormData(form);
    data.delete('redirect'); // редирект нужен только без JavaScript

    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data,
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message);

    success.hidden = false;
    form.querySelectorAll('input:not([type="hidden"]), textarea').forEach((f) => (f.value = ''));
  } catch (err) {
    errorMsg.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Отправить заявку';
  }
});
