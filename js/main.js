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

// Форма заявки: отправка на почту через formsubmit.co
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/a0521167@gmail.com';

const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
const errorMsg = document.getElementById('formError');
const submitBtn = form.querySelector('button[type="submit"]');

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
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        'Имя': form.name.value.trim(),
        'Телефон': form.phone.value.trim(),
        'Сообщение': form.message.value.trim(),
        _subject: 'Заявка с сайта 3D-JET.by',
        _template: 'table',
        _captcha: 'false',
      }),
    });

    if (!res.ok) throw new Error('HTTP ' + res.status);

    success.hidden = false;
    form.querySelectorAll('input, textarea').forEach((f) => (f.value = ''));
  } catch (err) {
    errorMsg.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Отправить заявку';
  }
});
