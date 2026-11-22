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
    ozon: ""
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
    ozon: ""
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
    ozon: ""
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
    ozon: ""
  },
  {
    id: "bmw-e60-kreplenie-parktronika",
    name: "Крепление парктроника BMW E60, бампер M-пакет (789596)",
    category: "Автозапчасти",
    photos: ["img/products/bmw-e60-kreplenie-parktronika/01.jpg", "img/products/bmw-e60-kreplenie-parktronika/02.jpg", "img/products/bmw-e60-kreplenie-parktronika/03.jpg", "img/products/bmw-e60-kreplenie-parktronika/04.jpg", "img/products/bmw-e60-kreplenie-parktronika/05.jpg"],
    price: 20,
    oldPrice: null,
    priceFrom: false,
    desc: "Крепление датчика парктроника для бампера M-пакета BMW E60. Держит датчик плотно, без люфта. Печатаем из ASA — прочный, не боится погоды. Ставится без доработок. На последнем фото — датчик, установленный в бампер на нашем креплении.",
    specs: ["Автомобиль: BMW E60, бампер M-пакет", "OEM-номер: 789596", "Материал: ASA", "Количество: 1 шт.", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: 789596-BMW"],
    badge: "Под заказ",
    ozon: ""
  },

  {
    id: "opel-vectra-b-reshetka",
    name: "Решётка радиатора Opel Vectra B",
    category: "Автозапчасти",
    photos: ["img/products/opel-vectra-b-reshetka/01.jpg", "img/products/opel-vectra-b-reshetka/02.jpg", "img/products/opel-vectra-b-reshetka/03.jpg"],
    price: 150,
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

  {
    id: "airo-fw12025s-sharnir-shchetki",
    name: "Ремкомплект шарнира щётки пылесоса AIRO FW12025S",
    category: "Запчасти для техники",
    photos: ["img/products/airo-fw12025s-sharnir-shchetki/01.jpg", "img/products/airo-fw12025s-sharnir-shchetki/02.jpg", "img/products/airo-fw12025s-sharnir-shchetki/03.jpg"],
    price: 100,
    oldPrice: null,
    priceFrom: false,
    desc: "Если сломался шарнир электрощётки — не нужно покупать новую щётку в сборе, достаточно заменить детали шарнира. Печатаем из PETG: ударопрочный, выдерживает постоянные нагрузки при уборке. Ставится на штатное место без клея. На фото: чёрные детали — наши, серые — сломанные заводские. Перед заказом сравните вашу деталь с фото.",
    specs: ["Подходит к: пылесос AIRO FW12025S", "Материал: PETG", "Изготовление: 3D-печать, под заказ 2–3 дня", "Артикул: KIT-AIRO-FW12025S"],
    badge: "Под заказ",
    ozon: ""
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
    ozon: ""
  },

  {
    id: "fiat-bravo-2-vtulki-kulisy",
    name: "Втулка кулисы КПП Fiat Bravo 2 (TPU)",
    category: "Автозапчасти",
    photos: ["img/products/fiat-bravo-2-vtulki-kulisy/01.png"],
    price: 10,
    oldPrice: null,
    priceFrom: false,
    desc: "Втулка в кулису механической коробки передач Fiat Bravo 2 — замена разбитой штатной, убирает люфт рычага. Печатаем из TPU: гибкий и прочный пластик, гасит вибрацию. Цена за 1 шт.; на одну сторону обычно нужны 2 шт. — 20 BYN. На фото — 3D-модель втулок.",
    specs: ["Автомобиль: Fiat Bravo 2 (6-ст. МКПП)", "Материал: TPU", "Количество: 1 шт.", "Изготовление: 3D-печать, под заказ 2–3 дня"],
    badge: "Под заказ",
    ozon: ""
  },

  {
    id: "byd-song-plus-korpus-kamery",
    name: "Корпус камеры заднего вида BYD Song Plus с форсункой омывателя",
    category: "Автозапчасти",
    photos: ["img/products/byd-song-plus-korpus-kamery/01.jpg", "img/products/byd-song-plus-korpus-kamery/02.jpg", "img/products/byd-song-plus-korpus-kamery/03.jpg", "img/products/byd-song-plus-korpus-kamery/04.jpg", "img/products/byd-song-plus-korpus-kamery/05.jpg"],
    price: 50,
    oldPrice: null,
    priceFrom: false,
    desc: "Корпус камеры заднего вида для BYD Song Plus — замена сломанного штатного. Проверен и установлен на автомобиль (последнее фото). В комплекте: корпус и форсунка омывателя камеры. Саму камеру переставляете со своей машины, шланг омывателя докупается отдельно. Установка — самостоятельно: форсунку при установке посадите на герметик, чтобы не подтекала под давлением омывайки.",
    specs: ["Автомобиль: BYD Song Plus", "В комплекте: корпус + форсунка омывателя", "Не входит: камера, шланг", "Установка: самостоятельно, форсунка — на герметик", "Изготовление: 3D-печать, под заказ 2–3 дня"],
    badge: "Под заказ",
    ozon: ""
  },

  {
    id: "derzhatel-gaykoverta-magnitnyy",
    name: "Магнитный держатель пневмогайковёрта для СТО",
    category: "Для мастерской",
    photos: ["img/products/derzhatel-gaykoverta-magnitnyy/01.jpg", "img/products/derzhatel-gaykoverta-magnitnyy/02.jpg", "img/products/derzhatel-gaykoverta-magnitnyy/03.jpg", "img/products/derzhatel-gaykoverta-magnitnyy/04.jpg", "img/products/derzhatel-gaykoverta-magnitnyy/05.jpg", "img/products/derzhatel-gaykoverta-magnitnyy/06.jpg", "img/products/derzhatel-gaykoverta-magnitnyy/07.jpg"],
    price: 70,
    oldPrice: null,
    priceFrom: false,
    desc: "Держатель для стандартного пневмогайковёрта 1/2\" на двух магнитах — крепится на стойку подъёмника или любую металлическую поверхность, без сверления. Гайковёрт всегда под рукой, рядом гнёзда для двух длинных головок и место под отвёртку. Магниты в комплекте. Перед заказом пришлите фото или модель вашего гайковёрта — проверим, подойдёт ли посадка.",
    specs: ["Подходит: стандартный пневмогайковёрт 1/2\"", "Крепление: 2 магнита (в комплекте)", "Куда: стойка подъёмника, верстак, любой металл", "Вмещает: гайковёрт, 2 головки, отвёртку", "Изготовление: 3D-печать, под заказ 2–3 дня"],
    badge: "Под заказ",
    ozon: ""
  },

  {
    id: "starax-kryuchok",
    name: "Крючок для выдвижной корзины STARAX",
    category: "Для дома",
    photos: ["img/products/starax-kryuchok/01.jpg", "img/products/starax-kryuchok/02.jpg", "img/products/starax-kryuchok/03.jpg"],
    price: 5,
    oldPrice: null,
    priceFrom: false,
    desc: "Замена сломанного пластикового крючка в системе выдвижных корзин STARAX — держит хромированную корзину на стойке. Печатаем из прочного инженерного пластика, белого или чёрного цвета. Посадка проверена на месте у клиента (первые два фото). Цена за 1 шт.",
    specs: ["Подходит: выдвижные корзины STARAX", "Цвет: белый или чёрный", "Количество: 1 шт.", "Изготовление: 3D-печать, под заказ 2–3 дня"],
    badge: "Под заказ",
    ozon: ""
  },

  // ↑ новые товары добавлять выше этой строки
];
