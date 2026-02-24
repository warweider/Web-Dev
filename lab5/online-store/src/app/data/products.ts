import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  // =========================
  // CATEGORY 1 — BOOTS (5)
  // =========================
  {
    id: 1,
    categoryId: 1,
    likes: 0,
    name: 'Бутсы adidas ID1319 (красный), 42',
    description:
      'Футбольные бутсы для тренировок и матчей на искусственном покрытии. Удобная посадка и хорошее сцепление помогают контролировать движения на поле.',
    price: 54990,
    rating: 4.8,
    image: 'assets/images/products/p1/1.jpg',
    images: ['assets/images/products/p1/1.jpg', 'assets/images/products/p1/2.jpg', 'assets/images/products/p1/3.jpg'],
    link: 'https://kaspi.kz/shop/p/butsy-adidas-id1319-krasnyi-42-133582187/?c=750000000'
  },
  {
    id: 2,
    categoryId: 1,
    likes: 0,
    name: 'Бутсы Joma TOPW2432IN (белый), 35',
    description:
      'Лёгкие бутсы для активной игры и тренировок. Материалы обеспечивают комфорт, а подошва помогает уверенно держаться на покрытии.',
    price: 32990,
    rating: 4.6,
    image: 'assets/images/products/p2/1.jpg',
    images: ['assets/images/products/p2/1.jpg', 'assets/images/products/p2/2.jpg', 'assets/images/products/p2/3.jpg'],
    link: 'https://kaspi.kz/shop/p/butsy-joma-topw2432in-belyi-35-123665282/?c=750000000'
  },
  {
    id: 3,
    categoryId: 1,
    likes: 0,
    name: 'Бутсы adidas Predator League FT TF (белый)',
    description:
      'Серия Predator создана для точных передач и ударов. Подходит для искусственных покрытий и даёт стабильность при резких сменах направления.',
    price: 69990,
    rating: 4.7,
    image: 'assets/images/products/p3/1.jpg',
    images: ['assets/images/products/p3/1.jpg', 'assets/images/products/p3/2.jpg', 'assets/images/products/p3/3.jpg'],
    link: 'https://kaspi.kz/shop/p/butsy-adidas-predator-league-ft-tf-belyi-142315056/?c=750000000'
  },
  {
    id: 4,
    categoryId: 1,
    likes: 0,
    name: 'Бутсы adidas (оранжевый)',
    description:
      'Яркие бутсы для динамичной игры и тренировок. Комфортная колодка и износостойкая подошва подходят для регулярного использования.',
    price: 59990,
    rating: 4.5,
    image: 'assets/images/products/p4/1.jpg',
    images: ['assets/images/products/p4/1.jpg', 'assets/images/products/p4/2.jpg', 'assets/images/products/p4/3.jpg'],
    link: 'https://kaspi.kz/shop/p/butsy-adidas-oranzhevyi-147121929/?c=750000000'
  },
  {
    id: 5,
    categoryId: 1,
    likes: 0,
    name: 'Бутсы adidas F50 League TF (фиолетовый)',
    description:
      'Линейка F50 — про скорость и лёгкость. Хороший вариант для искусственной травы, когда важны ускорения и манёвренность.',
    price: 74990,
    rating: 4.8,
    image: 'assets/images/products/p5/1.jpg',
    images: ['assets/images/products/p5/1.jpg', 'assets/images/products/p5/2.jpg', 'assets/images/products/p5/3.jpg'],
    link: 'https://kaspi.kz/shop/p/butsy-adidas-f50-league-tf-fioletovyi-142482973/?c=750000000'
  },

  // =========================
  // CATEGORY 2 — BALLS (5)
  // =========================
  {
    id: 6,
    categoryId: 2,
    likes: 0,
    name: 'Мяч adidas Jabulani, размер 5',
    description:
      'Футбольный мяч размера 5 для тренировок и игр. Хорошая форма и стабильный отскок делают его удобным для отработки техники.',
    price: 24990,
    rating: 4.7,
    image: 'assets/images/products/p8/1.jpg',
    images: ['assets/images/products/p8/1.jpg', 'assets/images/products/p8/2.jpg', 'assets/images/products/p8/3.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-adidas-mjach-adidas-dzhabulani-dlja-futbola-razmer-5-145015001/?c=750000000'
  },
  {
    id: 7,
    categoryId: 2,
    likes: 0,
    name: 'Мяч adidas UCL 24/25 Group Stage Mini, размер 5',
    description:
      'Мяч в стиле Лиги чемпионов для тренировок и футбольного настроения. Подходит для любительской игры и отработки базовых элементов.',
    price: 18990,
    rating: 4.6,
    image: 'assets/images/products/p9/1.jpg',
    images: ['assets/images/products/p9/1.jpg', 'assets/images/products/p9/2.jpg', 'assets/images/products/p9/3.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-adidas-ucl-24-25-group-stage-mini-dlja-futbola-razmer-5-123237428/?c=750000000'
  },
  {
    id: 8,
    categoryId: 2,
    likes: 0,
    name: 'Мяч 1Win MF, размер 5',
    description:
      'Футбольный мяч размера 5 для тренировок и любительских матчей. Подходит для игры на искусственном и натуральном покрытии.',
    price: 12990,
    rating: 4.6,
    image: 'assets/images/products/p11/1.jpg',
    images: ['assets/images/products/p11/1.jpg', 'assets/images/products/p11/2.jpg', 'assets/images/products/p11/3.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-1win-mf-mjach-dlja-futbola-razmer-5-137074893/?c=750000000'
  },
  {
    id: 9,
    categoryId: 2,
    likes: 0,
    name: 'Мяч G-Vite GV EU5-3, размер 5',
    description:
      'Классический футбольный мяч для тренировок и игр. Хороший контроль и стабильный отскок.',
    price: 10990,
    rating: 4.5,
    image: 'assets/images/products/p12/1.jpg',
    images: ['assets/images/products/p12/1.jpg', 'assets/images/products/p12/2.jpg', 'assets/images/products/p12/3.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-g-vite-gv-eu5-3-dlja-futbola-razmer-5-102740459/?c=750000000'
  },
  {
    id: 10,
    categoryId: 2,
    likes: 0,
    name: 'Мяч Kairat, размер 5',
    description:
      'Футбольный мяч размера 5 для активной игры. Подходит для тренировочного процесса и матчей.',
    price: 14990,
    rating: 4.7,
    image: 'assets/images/products/p13/1.jpg',
    images: ['assets/images/products/p13/1.jpg', 'assets/images/products/p13/2.jpg', 'assets/images/products/p13/3.jpg'],
    link: 'https://kaspi.kz/shop/p/mjach-kairat-dlja-futbola-razmer-5-151785683/?c=750000000'
  },

  // =========================
  // CATEGORY 3 — GLOVES (5)
  // =========================
  {
    id: 11,
    categoryId: 3,
    likes: 0,
    name: 'Predator Future Z (зелёный), M-L',
    description:
      'Аксессуар для футболистов, который помогает чувствовать мяч увереннее и защищает во время активной игры. Подходит для тренировок и матчей.',
    price: 19990,
    rating: 4.6,
    image: 'assets/images/products/p6/1.jpg',
    images: ['assets/images/products/p6/1.jpg', 'assets/images/products/p6/2.jpg', 'assets/images/products/p6/3.jpg'],
    link: 'https://kaspi.kz/shop/p/predator-future-z-zelenyi-m-l-114039849/?c=750000000'
  },
  {
    id: 12,
    categoryId: 3,
    likes: 0,
    name: 'Перчатки Academy Hyperwarm (чёрный), L',
    description:
      'Тёплые спортивные перчатки для занятий на улице в прохладную погоду. Удобно для тренировок, пробежек и активных игр.',
    price: 14990,
    rating: 4.4,
    image: 'assets/images/products/p7/1.jpg',
    images: ['assets/images/products/p7/1.jpg', 'assets/images/products/p7/2.jpg', 'assets/images/products/p7/3.jpg'],
    link: 'https://kaspi.kz/shop/p/perchatki-academy-hyperwarm-chernyi-l-147071200/?c=750000000'
  },
  {
    id: 13,
    categoryId: 3,
    likes: 0,
    name: 'Вратарские перчатки Spire Air Knit Hybrid',
    description:
      'Вратарские перчатки для тренировок и матчей. Обеспечивают уверенный захват и комфортную посадку.',
    price: 29990,
    rating: 4.8,
    image: 'assets/images/products/p14/1.jpg',
    images: ['assets/images/products/p14/1.jpg', 'assets/images/products/p14/2.jpg', 'assets/images/products/p14/3.jpg'],
    link: 'https://gnk-store.ru/ekipirovka-vratarya/perchatki-vratarya/vratarskie-perchatki-spire-air-knit-hybrid-2/'
  },
  {
    id: 14,
    categoryId: 3,
    likes: 0,
    name: 'Перчатки Spire Inspire 3.5',
    description:
      'Перчатки вратаря для уверенной игры. Подходят для регулярных тренировок и матчей.',
    price: 27990,
    rating: 4.6,
    image: 'assets/images/products/p15/1.jpg',
    images: ['assets/images/products/p15/1.jpg', 'assets/images/products/p15/2.jpg', 'assets/images/products/p15/3.jpg'],
    link: 'https://gnk-store.ru/ekipirovka-vratarya/perchatki-vratarya/spire-inspire-35-2-3-4/'
  },
  {
    id: 15,
    categoryId: 3,
    likes: 0,
    name: 'Перчатки adidas Predator Pro Hybrid',
    description:
      'Профессиональные вратарские перчатки с улучшенным сцеплением и удобной фиксацией.',
    price: 34990,
    rating: 4.9,
    image: 'assets/images/products/p16/1.jpg',
    images: ['assets/images/products/p16/1.jpg', 'assets/images/products/p16/2.jpg', 'assets/images/products/p16/3.jpg'],
    link: 'https://gnk-store.ru/ekipirovka-vratarya/perchatki-vratarya/adidas-predator-pro-promo-hybrid/'
  },

  // =========================
  // CATEGORY 4 — PROTECTION (5)
  // =========================
  {
    id: 16,
    categoryId: 4,
    likes: 0,
    name: 'Щитки adidas Tiro Match (мультиколор), M',
    description:
      'Футбольные щитки для защиты голени во время игры. Лёгкие и удобные, подходят для тренировок и матчей.',
    price: 12990,
    rating: 4.5,
    image: 'assets/images/products/p10/1.jpg',
    images: ['assets/images/products/p10/1.jpg', 'assets/images/products/p10/2.jpg', 'assets/images/products/p10/3.jpg'],
    link: 'https://kaspi.kz/shop/p/adidas-futbol-nye-schitki-tiro-match-mul-tikolor-m-122167026/?c=750000000'
  },
  {
    id: 17,
    categoryId: 4,
    likes: 0,
    name: 'Щитки Spire Carbon',
    description:
      'Лёгкие и прочные щитки для защиты голени. Подходят для активной игры и тренировок.',
    price: 19990,
    rating: 4.7,
    image: 'assets/images/products/p17/1.jpg',
    images: ['assets/images/products/p17/1.jpg', 'assets/images/products/p17/2.jpg', 'assets/images/products/p17/3.jpg'],
    link: 'https://gnk-store.ru/shhitki/shitki-spire-carbon/'
  },
  {
    id: 18,
    categoryId: 4,
    likes: 0,
    name: 'Щитки Jogel ProAirLite',
    description:
      'Футбольные щитки для тренировок и матчей. Удобная посадка и защита при столкновениях.',
    price: 15990,
    rating: 4.6,
    image: 'assets/images/products/p18/1.jpg',
    images: ['assets/images/products/p18/1.jpg', 'assets/images/products/p18/2.jpg', 'assets/images/products/p18/3.jpg'],
    link: 'https://gnk-store.ru/shhitki/shitki-futbolnye-proairlite-jogel/'
  },
  {
    id: 19,
    categoryId: 4,
    likes: 0,
    name: 'Тейп Mueller M-Tape 3.8x13.7m',
    description:
      'Спортивный тейп для фиксации и поддержки во время тренировок. Используется для профилактики травм.',
    price: 7990,
    rating: 4.7,
    image: 'assets/images/products/p19/1.jpg',
    images: ['assets/images/products/p19/1.jpg', 'assets/images/products/p19/2.jpg', 'assets/images/products/p19/3.jpg'],
    link: 'https://gnk-store.ru/ekipirovka-vratarya/aksessuary-vratarya/tejp-mueller-m-tape-3-8x13-7m-130105/'
  },
  {
    id: 20,
    categoryId: 4,
    likes: 0,
    name: 'Щитки adidas Predator League Performance (GR1522)',
    description:
      'Щитки adidas для защиты голени с комфортной посадкой. Подходят для регулярных тренировок и игр.',
    price: 22990,
    rating: 4.8,
    image: 'assets/images/products/p20/1.jpg',
    images: ['assets/images/products/p20/1.jpg', 'assets/images/products/p20/2.jpg', 'assets/images/products/p20/3.jpg'],
    link: 'https://adidas.kz/futbolnye-shhitki-predator-league-performance-gr1522'
  }
];