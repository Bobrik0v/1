/*
  ТОВАРЫ — каталог для раздела «Готовые изделия» на сайте.

  КАК ДОБАВИТЬ ТОВАР:
  1. Загрузи фото в папку img/products/ (на GitHub: открыть папку → Add file → Upload files).
     Имена файлов — латиницей, без пробелов: kryuchok-1.jpg, kryuchok-2.jpg
  2. Скопируй блок одного товара ниже — от { до }, включая запятую после },
     вставь его перед строкой «// ↑ новые товары добавлять выше этой строки» и поменяй значения.
  3. Commit changes → в ветку main. Через минуту товар появится на сайте.

  ПОЛЯ:
    id        — короткий код латиницей, без пробелов, у каждого товара свой: "volvo-v70-reshetka"
                (по нему работает ссылка на товар: 3d-jet.by/#product=volvo-v70-reshetka)
    name      — название (обязательно)
    category  — категория для фильтра: "Автозапчасти", "Для дома", "Запчасти для техники"…
                (кнопки-фильтры появятся сами, когда категорий станет 2 и больше)
    photos    — список фото: ["img/products/a.jpg", "img/products/b.jpg"]. Первое — главное.
                Можно [] — будет заглушка
    price     — цена в BYN числом: 25. Договорная — пиши null («Цена по запросу»)
    oldPrice  — старая цена для скидки (зачёркнутая цена и «−20%»), иначе null
    priceFrom — true, если цена «от» («от 25 BYN»), иначе false
    desc      — описание, 1–3 предложения
    specs     — характеристики: ["Материал: ASA", "Цвет: чёрный"] — до двоеточия название,
                после — значение (в карточке будет таблица)
    badge     — плашка на фото: "Хит", "Новинка", "Под заказ" или ""
    ozon      — ссылка на этот товар на Ozon, если есть, иначе ""

  ВАЖНО: текст — в "кавычках", между полями — запятые. Если товар не появился —
  скорее всего, пропущена кавычка или запятая.

  ОБРАЗЕЦ ТОВАРА (скопируй от { до }, включая запятую, и вставь в список ниже):

  {
    id: "kod-tovara",
    name: "Название товара",
    category: "Для дома",
    photos: ["img/products/foto-1.jpg", "img/products/foto-2.jpg"],
    price: 25,
    oldPrice: null,
    priceFrom: false,
    desc: "Короткое описание товара.",
    specs: ["Материал: PETG", "Цвет: чёрный", "Размер: 50×30 мм"],
    badge: "",
    ozon: ""
  },
*/

window.PRODUCTS = [

  {
    id: "opel-vectra-b-vstavki-ruchek",
    name: "Вставки ручек дверных карт Opel Vectra B, комплект",
    category: "Автозапчасти",
    photos: ["img/products/opel-vectra-b-vstavki-ruchek/01.jpg", "img/products/opel-vectra-b-vstavki-ruchek/02.jpg", "img/products/opel-vectra-b-vstavki-ruchek/03.jpg", "img/products/opel-vectra-b-vstavki-ruchek/04.jpg", "img/products/opel-vectra-b-vstavki-ruchek/05.jpg"],
    price: 50,
    oldPrice: null,
    priceFrom: false,
    desc: "Комплект вставок (заглушек) в дверные карты Opel Vectra B — замена сломанным или потерянным. Печатаем из ASA: не деформируется летом в салоне и не выцветает на солнце, матовая поверхность как у заводского пластика. Ставятся на штатные места без доработок.",
    specs: ["Автомобиль: Opel Vectra B", "Материал: ASA", "Цвет: чёрный, матовый", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: OVB-HANDLE-INS-01"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5027321094"
  },
  {
    id: "volvo-v70-reshetka",
    name: "Решётка радиатора Volvo V70 (под покраску)",
    category: "Автозапчасти",
    photos: ["img/products/volvo-v70-reshetka/01.jpg", "img/products/volvo-v70-reshetka/02.jpg", "img/products/volvo-v70-reshetka/03.jpg"],
    price: 170,
    oldPrice: null,
    priceFrom: false,
    desc: "Замена треснувшей или выцветшей решётки Volvo V70, которую сложно найти. Повторяет форму и крепления оригинала. Важно: деталь НЕ окрашена — поставляется в чёрном пластике, под покраску в цвет кузова или в чёрный мат/глянец. Перед покраской — лёгкая шлифовка и грунт по пластику.",
    specs: ["Автомобиль: Volvo V70", "Покрытие: не окрашена, под покраску", "Вес: около 400 г", "Изготовление: 3D-печать, под заказ", "Артикул: VOLVO-V70-GR"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5396380069"
  },
  {
    id: "peugeot-605-ramka-magnitoly",
    name: "Переходная рамка магнитолы Peugeot 605 (1 DIN)",
    category: "Автозапчасти",
    photos: ["img/products/peugeot-605-ramka-magnitoly/01.jpg", "img/products/peugeot-605-ramka-magnitoly/02.jpg", "img/products/peugeot-605-ramka-magnitoly/03.jpg"],
    price: 40,
    oldPrice: null,
    priceFrom: false,
    desc: "Переходная рамка, чтобы поставить в Peugeot 605 любую магнитолу размера 1 DIN. Закрывает щели вокруг магнитолы и держит её без люфта. Ставится своими руками за несколько минут, без доработок.",
    specs: ["Автомобиль: Peugeot 605", "Под магнитолу: 1 DIN", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: PEG605RMK01"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5038456983"
  },
  {
    id: "audi-a8-d4-shesterna-pechki",
    name: "Шестерня актуатора заслонки печки Audi A8 D4",
    category: "Автозапчасти",
    photos: ["img/products/audi-a8-d4-shesterna-pechki/01.jpg", "img/products/audi-a8-d4-shesterna-pechki/02.jpg"],
    price: 20,
    oldPrice: null,
    priceFrom: false,
    desc: "Шестерня сервопривода заслонки отопителя Audi A8 D4 (2015). Чинит заклинившую или щёлкающую печку без покупки сервопривода в сборе. Печатаем из PA-CF — полиамида с углеволокном: прочный, износостойкий, не боится жары в отопителе. На фото: слева — наша шестерня, справа — изношенная заводская. Перед заказом сравните вашу деталь с фото.",
    specs: ["Автомобиль: Audi A8 D4 (2015)", "OEM-номер: 4H0820511", "Материал: PA-CF (полиамид с углеволокном)", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: GEAR-AUDI-A8D4-HTR"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5145367433"
  },
  {
    id: "audi-a6-c6-kolpachok-diska",
    name: "Колпачок на литой диск Audi A6 C6, 150 / 62,5 мм",
    category: "Автозапчасти",
    photos: ["img/products/audi-a6-c6-kolpachok-diska/01.jpg", "img/products/audi-a6-c6-kolpachok-diska/02.jpg"],
    price: 40,
    oldPrice: null,
    priceFrom: false,
    desc: "Колпачок-заглушка центрального отверстия литого диска Audi A6 C6. Защищает ступицу от грязи и реагентов, ставится без инструмента. Цена за 1 шт.",
    specs: ["Автомобиль: Audi A6 C6", "Размер: 150 / 62,5 мм", "Цвет: серый", "Количество: 1 шт.", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: 914660715"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5397573853"
  },
  {
    id: "bmw-e60-kreplenie-parktronika",
    name: "Крепление парктроника BMW E60, бампер M-пакет (789596)",
    category: "Автозапчасти",
    photos: ["img/products/bmw-e60-kreplenie-parktronika/01.jpg", "img/products/bmw-e60-kreplenie-parktronika/02.jpg", "img/products/bmw-e60-kreplenie-parktronika/03.jpg", "img/products/bmw-e60-kreplenie-parktronika/04.jpg", "img/products/bmw-e60-kreplenie-parktronika/05.jpg", "img/products/bmw-e60-kreplenie-parktronika/06.jpg", "img/products/bmw-e60-kreplenie-parktronika/07.jpg", "img/products/bmw-e60-kreplenie-parktronika/08.jpg", "img/products/bmw-e60-kreplenie-parktronika/09.jpg"],
    price: 20,
    oldPrice: null,
    priceFrom: false,
    desc: "Крепление датчика парктроника для бампера M-пакета BMW E60. Держит датчик плотно, без люфта. Печатаем из ASA — прочный, не боится погоды. Ставится без доработок.",
    specs: ["Автомобиль: BMW E60, бампер M-пакет", "OEM-номер: 789596", "Материал: ASA", "Количество: 1 шт.", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: 789596-BMW"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5613311432"
  },
  {
    id: "airo-fw12025s-sharnir-shchetki",
    name: "Ремкомплект шарнира щётки пылесоса AIRO FW12025S",
    category: "Запчасти для техники",
    photos: ["img/products/airo-fw12025s-sharnir-shchetki/01.jpg", "img/products/airo-fw12025s-sharnir-shchetki/02.jpg", "img/products/airo-fw12025s-sharnir-shchetki/03.jpg"],
    price: 100,
    oldPrice: null,
    priceFrom: false,
    desc: "Если сломался шарнир электрощётки — не нужно покупать новую щётку в сборе, достаточно заменить детали шарнира. Печатаем из PETG: ударопрочный, выдерживает постоянные нагрузки при уборке. Ставится на штатное место без клея. Перед заказом сравните вашу деталь с фото.",
    specs: ["Подходит к: пылесос AIRO FW12025S", "Материал: PETG", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: KIT-AIRO-FW12025S"],
    badge: "Под заказ",
    ozon: "https://ozon.ru/product/5145589427"
  },

  {
    id: "opel-vectra-b-reshetka",
    name: "Решётка радиатора Opel Vectra B",
    category: "Автозапчасти",
    photos: ["img/products/opel-vectra-b-reshetka/01.jpg", "img/products/opel-vectra-b-reshetka/02.jpg", "img/products/opel-vectra-b-reshetka/03.jpg"],
    price: null,
    oldPrice: null,
    priceFrom: false,
    desc: "Решётка радиатора для Opel Vectra B — замена треснувшей или потерянной. Повторяет форму и крепления оригинала, ставится своими руками на штатное место. На первом фото — решётка, установленная на автомобиль.",
    specs: ["Автомобиль: Opel Vectra B", "Изготовление: 3D-печать, под заказ", "Артикул: OPL-VECB-GRIL-01"],
    badge: "Под заказ",
    ozon: ""
  },

  {
    id: "figurka-pudge",
    name: "Фигурка Пудж, 23 см (под покраску)",
    category: "Фигурки",
    photos: ["img/products/figurka-pudge/01.jpg", "img/products/figurka-pudge/02.jpg", "img/products/figurka-pudge/03.jpg", "img/products/figurka-pudge/04.jpg"],
    price: 200,
    oldPrice: null,
    priceFrom: false,
    desc: "Крупная фигурка Пуджа высотой около 23 см на круглой подставке. Напечатана на 3D-принтере, поставляется в белом пластике — можно покрасить самому или оставить как есть.",
    specs: ["Высота: около 23 см", "Цвет: белый, без покраски", "Изготовление: 3D-печать, под заказ"],
    badge: "Под заказ",
    ozon: ""
  },

  // ↑ новые товары добавлять выше этой строки
];
