/* Каталог «как на маркетплейсе»: сетка карточек, фильтр по категориям,
   карточка товара с галереей, корзина (хранится в браузере посетителя).
   Оформление заказа = перенос корзины в форму заявки (Web3Forms).
   Данные — window.PRODUCTS из js/products.js. */
(function () {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // ---------- данные ----------
  const raw = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
  const products = raw.filter((p) => p && p.name).map((p, i) => {
    const photos = (Array.isArray(p.photos) ? p.photos : []).concat(p.photo ? [p.photo] : [])
      .filter((x, k, arr) => x && arr.indexOf(x) === k);
    return Object.assign({}, p, {
      id: String(p.id || 'p' + (i + 1)),
      photos,
      category: p.category || '',
      specs: Array.isArray(p.specs) ? p.specs : [],
    });
  });
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));

  const esc = (t) => String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const num = (n) => Number(n).toLocaleString('ru-RU');
  const hasPrice = (p) => typeof p.price === 'number';
  const discount = (p) => (hasPrice(p) && typeof p.oldPrice === 'number' && p.oldPrice > p.price
    ? Math.round((1 - p.price / p.oldPrice) * 100) : 0);
  const priceHtml = (p, big) => {
    if (!hasPrice(p)) return `<span class="pp__value pp__value--ask">Цена по запросу</span>`;
    const d = discount(p);
    return `<span class="pp__value${big ? ' pp__value--big' : ''}">${p.priceFrom ? 'от ' : ''}${num(p.price)} BYN</span>`
      + (d ? `<s class="pp__old">${num(p.oldPrice)} BYN</s><span class="pp__disc">−${d}%</span>` : '');
  };

  // ---------- корзина ----------
  const KEY = '3djet-cart';
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { cart = {}; }
  Object.keys(cart).forEach((id) => { if (!byId[id] || !(cart[id] > 0)) delete cart[id]; });
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} };
  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const setQty = (id, q) => {
    q = Math.max(0, Math.min(99, q | 0));
    if (q) cart[id] = q; else delete cart[id];
    save(); refresh();
  };

  // ---------- каркас: фильтры, модалка, корзина ----------
  const section = document.getElementById('shop');
  const cats = [...new Set(products.map((p) => p.category).filter(Boolean))];
  let activeCat = '';
  if (cats.length > 1) {
    const bar = document.createElement('div');
    bar.className = 'pchips';
    bar.innerHTML = ['', ...cats].map((c) =>
      `<button type="button" class="pchip${c === '' ? ' is-active' : ''}" data-cat="${esc(c)}">${c ? esc(c) : 'Все'}</button>`).join('');
    grid.before(bar);
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('.pchip'); if (!b) return;
      activeCat = b.dataset.cat;
      bar.querySelectorAll('.pchip').forEach((x) => x.classList.toggle('is-active', x === b));
      renderGrid();
    });
  }

  document.body.insertAdjacentHTML('beforeend', `
    <div class="pmodal" id="pmodal" hidden>
      <div class="pmodal__backdrop" data-close></div>
      <div class="pmodal__box" role="dialog" aria-modal="true" aria-labelledby="pmodalTitle">
        <button type="button" class="pmodal__close" data-close aria-label="Закрыть">×</button>
        <div class="pmodal__content" id="pmodalContent"></div>
      </div>
    </div>
    <div class="cart" id="cart" hidden>
      <div class="cart__backdrop" data-cart-close></div>
      <aside class="cart__panel" role="dialog" aria-modal="true" aria-label="Корзина">
        <div class="cart__head"><h3>Корзина</h3><button type="button" class="pmodal__close" data-cart-close aria-label="Закрыть">×</button></div>
        <div class="cart__items" id="cartItems"></div>
        <div class="cart__foot" id="cartFoot"></div>
      </aside>
    </div>
    <button type="button" class="cart-fab" id="cartFab" hidden aria-label="Открыть корзину">🛒<span id="cartCount">0</span></button>`);

  const modal = document.getElementById('pmodal');
  const modalContent = document.getElementById('pmodalContent');
  const cartEl = document.getElementById('cart');
  const fab = document.getElementById('cartFab');
  let openId = null;

  const stepper = (id) => `<div class="pstep"><button type="button" data-dec="${id}" aria-label="Меньше">−</button><span>${cart[id]}</span><button type="button" data-inc="${id}" aria-label="Больше">+</button></div>`;
  const buyBtn = (id, block) => (cart[id]
    ? stepper(id)
    : `<button type="button" class="btn${block ? ' btn--block' : ''} pcard__btn" data-add="${id}">В корзину</button>`);

  // ---------- сетка ----------
  function renderGrid() {
    const list = products.filter((p) => !activeCat || p.category === activeCat);
    if (!list.length) {
      grid.innerHTML = '<p class="products__empty">Скоро здесь появятся готовые изделия. А пока — <a href="#contact">напишите нам</a>, напечатаем под ваш запрос.</p>';
      return;
    }
    grid.innerHTML = list.map((p) => `
      <article class="pcard" data-open="${p.id}">
        <div class="pcard__photo">
          ${p.photos[0] ? `<img src="${esc(p.photos[0])}" alt="${esc(p.name)}" loading="lazy">` : '<span class="pcard__nophoto">🧩</span>'}
          ${p.badge ? `<span class="pcard__badge">${esc(p.badge)}</span>` : ''}
          ${p.photos.length > 1 ? `<span class="pcard__more">📷 ${p.photos.length}</span>` : ''}
        </div>
        <div class="pcard__body">
          <div class="pp">${priceHtml(p)}</div>
          <h3 class="pcard__name">${esc(p.name)}</h3>
          <div class="pcard__buy">${buyBtn(p.id, true)}</div>
        </div>
      </article>`).join('');
  }

  // ---------- карточка товара ----------
  function renderModal(p) {
    const specs = p.specs.map((s) => {
      const i = String(s).indexOf(':');
      return i > 0
        ? `<tr><th>${esc(s.slice(0, i))}</th><td>${esc(s.slice(i + 1).trim())}</td></tr>`
        : `<tr><td colspan="2">${esc(s)}</td></tr>`;
    }).join('');
    modalContent.innerHTML = `
      <div class="pmodal__gallery">
        <div class="pgal" id="pgal">
          ${p.photos.length ? p.photos.map((src, k) => `<img src="${esc(src)}" alt="${esc(p.name)} — фото ${k + 1}">`).join('') : '<div class="pgal__empty">🧩</div>'}
        </div>
        ${p.photos.length > 1 ? `<div class="pgal__thumbs">${p.photos.map((src, k) => `<button type="button" data-thumb="${k}" class="${k ? '' : 'is-active'}"><img src="${esc(src)}" alt=""></button>`).join('')}</div>` : ''}
      </div>
      <div class="pmodal__info">
        ${p.badge ? `<span class="pcard__badge pcard__badge--static">${esc(p.badge)}</span>` : ''}
        <h3 class="pmodal__title" id="pmodalTitle">${esc(p.name)}</h3>
        <div class="pp pp--big">${priceHtml(p, true)}</div>
        <div class="pmodal__buy">
          ${buyBtn(p.id, true)}
          ${p.ozon ? `<a class="btn btn--outline btn--block" href="${esc(p.ozon)}" target="_blank" rel="noopener">Купить на Ozon</a>` : ''}
        </div>
        ${p.desc ? `<h4>Описание</h4><p class="pmodal__desc">${esc(p.desc)}</p>` : ''}
        ${specs ? `<h4>Характеристики</h4><table class="pspecs">${specs}</table>` : ''}
        <p class="pmodal__note">Оплата — после согласования заказа, на расчётный счёт ИП. Доставка Белпочтой по всей Беларуси или самовывоз в Минске.</p>
      </div>`;
    const gal = document.getElementById('pgal');
    if (gal) gal.addEventListener('scroll', () => {
      const k = Math.round(gal.scrollLeft / gal.clientWidth);
      modalContent.querySelectorAll('[data-thumb]').forEach((t) => t.classList.toggle('is-active', +t.dataset.thumb === k));
    }, { passive: true });
  }

  function openProduct(id, push) {
    const p = byId[id]; if (!p) return;
    openId = id;
    renderModal(p);
    modal.hidden = false;
    document.body.classList.add('is-locked');
    if (push !== false) history.replaceState(null, '', '#product=' + encodeURIComponent(id));
  }
  function closeProduct() {
    if (modal.hidden) return;
    modal.hidden = true; openId = null;
    if (cartEl.hidden) document.body.classList.remove('is-locked');
    if (location.hash.startsWith('#product=')) history.replaceState(null, '', location.pathname + location.search + '#shop');
  }

  // ---------- корзина: панель ----------
  function renderCart() {
    const ids = Object.keys(cart);
    const items = document.getElementById('cartItems');
    const foot = document.getElementById('cartFoot');
    if (!ids.length) {
      items.innerHTML = '<p class="cart__empty">Корзина пуста</p>';
      foot.innerHTML = '';
      return;
    }
    let total = 0, ask = 0;
    items.innerHTML = ids.map((id) => {
      const p = byId[id];
      if (hasPrice(p)) total += p.price * cart[id]; else ask++;
      return `<div class="citem">
        <div class="citem__photo">${p.photos[0] ? `<img src="${esc(p.photos[0])}" alt="">` : '🧩'}</div>
        <div class="citem__info">
          <div class="citem__name" data-open="${id}">${esc(p.name)}</div>
          <div class="citem__price">${hasPrice(p) ? `${p.priceFrom ? 'от ' : ''}${num(p.price * cart[id])} BYN` : 'Цена по запросу'}</div>
          <div class="citem__row">${stepper(id)}<button type="button" class="citem__del" data-del="${id}">Удалить</button></div>
        </div>
      </div>`;
    }).join('');
    foot.innerHTML = `
      <div class="cart__total"><span>Итого (${count()} шт.)</span><b>${total ? num(total) + ' BYN' : '—'}</b></div>
      ${ask ? '<p class="cart__hint">По позициям «цена по запросу» стоимость назовём после уточнения.</p>' : ''}
      <button type="button" class="btn btn--block" data-checkout>Оформить заказ</button>
      <button type="button" class="cart__clear" data-clear>Очистить корзину</button>`;
  }
  function openCart() {
    renderCart(); cartEl.hidden = false; document.body.classList.add('is-locked');
  }
  function closeCart() {
    cartEl.hidden = true;
    if (modal.hidden) document.body.classList.remove('is-locked');
  }

  function checkout() {
    const ids = Object.keys(cart); if (!ids.length) return;
    let total = 0, ask = false;
    const lines = ids.map((id, i) => {
      const p = byId[id], q = cart[id];
      if (hasPrice(p)) { total += p.price * q; return `${i + 1}. ${p.name} — ${q} шт. × ${p.priceFrom ? 'от ' : ''}${num(p.price)} BYN = ${num(p.price * q)} BYN`; }
      ask = true; return `${i + 1}. ${p.name} — ${q} шт. (цена по запросу)`;
    });
    const text = 'Заказ из каталога:\n' + lines.join('\n')
      + (total ? `\nИтого: ${num(total)} BYN${ask ? ' + позиции по запросу' : ''}` : '');
    const msg = document.getElementById('message');
    if (msg) {
      const rest = msg.value.replace(/Заказ из каталога:[\s\S]*?(?=\n\n|$)/, '').trim();
      msg.value = text + (rest ? '\n\n' + rest : '');
    }
    try { sessionStorage.setItem('3djet-checkout', '1'); } catch (e) {}
    closeCart(); closeProduct();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { const n = document.getElementById('name'); if (n) n.focus({ preventScroll: true }); }, 600);
  }

  // после успешной отправки формы — очистить корзину, если заявка шла из неё
  document.addEventListener('order:sent', () => {
    let flag = null; try { flag = sessionStorage.getItem('3djet-checkout'); } catch (e) {}
    if (flag) { cart = {}; save(); refresh(); try { sessionStorage.removeItem('3djet-checkout'); } catch (e) {} }
  });

  function refresh() {
    renderGrid();
    if (openId) {
      const buy = modalContent.querySelector('.pmodal__buy');
      if (buy) buy.firstElementChild.outerHTML = buyBtn(openId, true);
    }
    if (!cartEl.hidden) renderCart();
    const c = count();
    fab.hidden = !c;
    document.getElementById('cartCount').textContent = c;
  }

  // ---------- события (делегирование) ----------
  document.addEventListener('click', (e) => {
    const t = e.target;
    const add = t.closest('[data-add]'), inc = t.closest('[data-inc]'), dec = t.closest('[data-dec]'), del = t.closest('[data-del]');
    if (add) { setQty(add.dataset.add, 1); return; }
    if (inc) { setQty(inc.dataset.inc, (cart[inc.dataset.inc] || 0) + 1); return; }
    if (dec) { setQty(dec.dataset.dec, (cart[dec.dataset.dec] || 0) - 1); return; }
    if (del) { setQty(del.dataset.del, 0); return; }
    const thumb = t.closest('[data-thumb]');
    if (thumb) { const g = document.getElementById('pgal'); g.scrollTo({ left: g.clientWidth * +thumb.dataset.thumb, behavior: 'smooth' }); return; }
    if (t.closest('[data-checkout]')) { checkout(); return; }
    if (t.closest('[data-clear]')) { cart = {}; save(); refresh(); return; }
    if (t.closest('[data-close]')) { closeProduct(); return; }
    if (t.closest('[data-cart-close]')) { closeCart(); return; }
    if (t.closest('#cartFab')) { openCart(); return; }
    const op = t.closest('[data-open]');
    if (op) { if (!cartEl.hidden) closeCart(); openProduct(op.dataset.open); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!modal.hidden) closeProduct(); else if (!cartEl.hidden) closeCart();
  });

  refresh();
  const m = location.hash.match(/^#product=(.+)$/);
  if (m && byId[decodeURIComponent(m[1])]) {
    section.scrollIntoView();
    openProduct(decodeURIComponent(m[1]), false);
  }
})();
