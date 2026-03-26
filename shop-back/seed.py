"""
Run with:  python seed.py
Populates the database with categories and products from Lab 5 (Football Online Store).
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# ── Categories ────────────────────────────────────────────────────────────────
boots      = Category.objects.create(name='Boots')
balls      = Category.objects.create(name='Balls')
gloves     = Category.objects.create(name='Gloves')
protection = Category.objects.create(name='Protection')

# ── Products ──────────────────────────────────────────────────────────────────

# CATEGORY 1 — BOOTS
Product.objects.create(
    name='Бутсы adidas ID1319 (красный), 42',
    description='Футбольные бутсы для тренировок и матчей на искусственном покрытии. Удобная посадка и хорошее сцепление помогают контролировать движения на поле.',
    price=54990,
    count=20,
    is_active=True,
    category=boots,
)
Product.objects.create(
    name='Бутсы Joma TOPW2432IN (белый), 35',
    description='Лёгкие бутсы для активной игры и тренировок. Материалы обеспечивают комфорт, а подошва помогает уверенно держаться на покрытии.',
    price=32990,
    count=35,
    is_active=True,
    category=boots,
)
Product.objects.create(
    name='Бутсы adidas Predator League FT TF (белый)',
    description='Серия Predator создана для точных передач и ударов. Подходит для искусственных покрытий и даёт стабильность при резких сменах направления.',
    price=69990,
    count=15,
    is_active=True,
    category=boots,
)
Product.objects.create(
    name='Бутсы adidas (оранжевый)',
    description='Яркие бутсы для динамичной игры и тренировок. Комфортная колодка и износостойкая подошва подходят для регулярного использования.',
    price=59990,
    count=25,
    is_active=True,
    category=boots,
)
Product.objects.create(
    name='Бутсы adidas F50 League TF (фиолетовый)',
    description='Линейка F50 — про скорость и лёгкость. Хороший вариант для искусственной травы, когда важны ускорения и манёвренность.',
    price=74990,
    count=18,
    is_active=True,
    category=boots,
)

# CATEGORY 2 — BALLS
Product.objects.create(
    name='Мяч adidas Jabulani, размер 5',
    description='Футбольный мяч размера 5 для тренировок и игр. Хорошая форма и стабильный отскок делают его удобным для отработки техники.',
    price=24990,
    count=50,
    is_active=True,
    category=balls,
)
Product.objects.create(
    name='Мяч adidas UCL 24/25 Group Stage Mini, размер 5',
    description='Мяч в стиле Лиги чемпионов для тренировок и футбольного настроения. Подходит для любительской игры и отработки базовых элементов.',
    price=18990,
    count=40,
    is_active=True,
    category=balls,
)
Product.objects.create(
    name='Мяч 1Win MF, размер 5',
    description='Футбольный мяч размера 5 для тренировок и любительских матчей. Подходит для игры на искусственном и натуральном покрытии.',
    price=12990,
    count=60,
    is_active=True,
    category=balls,
)
Product.objects.create(
    name='Мяч G-Vite GV EU5-3, размер 5',
    description='Классический футбольный мяч для тренировок и игр. Хороший контроль и стабильный отскок.',
    price=10990,
    count=45,
    is_active=True,
    category=balls,
)
Product.objects.create(
    name='Мяч Kairat, размер 5',
    description='Футбольный мяч размера 5 для активной игры. Подходит для тренировочного процесса и матчей.',
    price=14990,
    count=30,
    is_active=True,
    category=balls,
)

# CATEGORY 3 — GLOVES
Product.objects.create(
    name='Predator Future Z (зелёный), M-L',
    description='Аксессуар для футболистов, который помогает чувствовать мяч увереннее и защищает во время активной игры. Подходит для тренировок и матчей.',
    price=19990,
    count=30,
    is_active=True,
    category=gloves,
)
Product.objects.create(
    name='Перчатки Academy Hyperwarm (чёрный), L',
    description='Тёплые спортивные перчатки для занятий на улице в прохладную погоду. Удобно для тренировок, пробежек и активных игр.',
    price=14990,
    count=40,
    is_active=True,
    category=gloves,
)
Product.objects.create(
    name='Вратарские перчатки Spire Air Knit Hybrid',
    description='Вратарские перчатки для тренировок и матчей. Обеспечивают уверенный захват и комфортную посадку.',
    price=29990,
    count=20,
    is_active=True,
    category=gloves,
)
Product.objects.create(
    name='Перчатки Spire Inspire 3.5',
    description='Перчатки вратаря для уверенной игры. Подходят для регулярных тренировок и матчей.',
    price=27990,
    count=25,
    is_active=True,
    category=gloves,
)
Product.objects.create(
    name='Перчатки adidas Predator Pro Hybrid',
    description='Профессиональные вратарские перчатки с улучшенным сцеплением и удобной фиксацией.',
    price=34990,
    count=15,
    is_active=True,
    category=gloves,
)

# CATEGORY 4 — PROTECTION
Product.objects.create(
    name='Щитки adidas Tiro Match (мультиколор), M',
    description='Футбольные щитки для защиты голени во время игры. Лёгкие и удобные, подходят для тренировок и матчей.',
    price=12990,
    count=55,
    is_active=True,
    category=protection,
)
Product.objects.create(
    name='Щитки Spire Carbon',
    description='Лёгкие и прочные щитки для защиты голени. Подходят для активной игры и тренировок.',
    price=19990,
    count=35,
    is_active=True,
    category=protection,
)
Product.objects.create(
    name='Щитки Jogel ProAirLite',
    description='Футбольные щитки для тренировок и матчей. Удобная посадка и защита при столкновениях.',
    price=15990,
    count=40,
    is_active=True,
    category=protection,
)
Product.objects.create(
    name='Тейп Mueller M-Tape 3.8x13.7m',
    description='Спортивный тейп для фиксации и поддержки во время тренировок. Используется для профилактики травм.',
    price=7990,
    count=100,
    is_active=True,
    category=protection,
)
Product.objects.create(
    name='Щитки adidas Predator League Performance (GR1522)',
    description='Щитки adidas для защиты голени с комфортной посадкой. Подходят для регулярных тренировок и игр.',
    price=22990,
    count=30,
    is_active=True,
    category=protection,
)

print(f'✅ Seeded {Category.objects.count()} categories and {Product.objects.count()} products.')
print()
print('Categories:')
for c in Category.objects.all():
    print(f'  [{c.id}] {c.name} — {c.products.count()} products')
