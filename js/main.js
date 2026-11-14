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

// Товары: карточки рисуются из списка window.PRODUCTS (файл js/products.js)
(function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const list = Array.isArray(window.PRODUCTS) ? window.PRODUCTS.filter((p) => p && p.name) : [];
  if (!list.length) {
    grid.innerHTML = '<p class="products__empty">Скоро здесь появятся готовые изделия. А пока — <a href="#contact">напишите нам</a>, напечатаем под ваш запрос.</p>';
    return;
  }
  const esc = (t) => String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const priceText = (p) => (typeof p.price === 'number'
    ? (p.priceFrom ? 'от ' : '') + p.price + ' BYN'
    : 'Цена по запросу');

  grid.innerHTML = list.map((p) => `
    <article class="product">
      ${p.badge ? `<div class="product__badge">${esc(p.badge)}</div>` : ''}
      <div class="product__photo">
        ${p.photo
          ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy">`
          : '<span class="product__nophoto">🧩</span>'}
      </div>
      <div class="product__body">
        <h3 class="product__name">${esc(p.name)}</h3>
        ${p.desc ? `<p class="product__desc">${esc(p.desc)}</p>` : ''}
        ${Array.isArray(p.specs) && p.specs.length
          ? `<ul class="product__specs">${p.specs.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}
        <div class="product__price">${priceText(p)}</div>
        <div class="product__actions">
          <button type="button" class="btn btn--block product__order" data-name="${esc(p.name)}">Заказать</button>
          ${p.ozon ? `<a class="btn btn--outline btn--block" href="${esc(p.ozon)}" target="_blank" rel="noopener">Купить на Ozon</a>` : ''}
        </div>
      </div>
    </article>`).join('');

  // «Заказать» → вписать товар в форму заявки и прокрутить к ней
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.product__order');
    if (!btn) return;
    const msg = document.getElementById('message');
    if (msg) {
      const line = 'Хочу заказать: ' + btn.dataset.name;
      if (!msg.value.includes(line)) msg.value = (msg.value ? msg.value + '\n' : '') + line;
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { const n = document.getElementById('name'); if (n) n.focus({ preventScroll: true }); }, 600);
  });
})();

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
