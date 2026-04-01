# shop-back — Django REST Framework API

Backend API for the Angular Football Online Store (Lab 8 + Lab 9).

## Project Structure

```
shop-back/
├── shop_back/                        # Django project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── api/                              # Main app
│   ├── migrations/
│   ├── models.py                     # Category & Product models
│   ├── serializers.py                # DRF ModelSerializers
│   ├── views.py                      # ViewSets
│   ├── urls.py                       # DefaultRouter
│   └── admin.py
├── manage.py
├── seed.py                           # Sample data loader
├── OnlineShopAPI.postman_collection.json
├── requirements.txt
└── .gitignore
```

## Setup & Run

```bash
# 1. Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # macOS / Linux

# 2. Install dependencies (Django + DRF)
pip install -r requirements.txt

# 3. Apply migrations
python manage.py migrate

# 4. Load seed data (4 categories + 20 products)
python seed.py

# 5. Create superuser for admin panel
python manage.py createsuperuser

# 6. Start the server
python manage.py runserver
```

## API Endpoints

| Method        | Endpoint                            | Description               |
|---------------|-------------------------------------|---------------------------|
| GET           | `/api/products/`                    | List all products          |
| POST          | `/api/products/`                    | Create a product           |
| GET           | `/api/products/<id>/`               | Get product by ID          |
| PUT           | `/api/products/<id>/`               | Update product             |
| DELETE        | `/api/products/<id>/`               | Delete product             |
| GET           | `/api/categories/`                  | List all categories        |
| POST          | `/api/categories/`                  | Create a category          |
| GET           | `/api/categories/<id>/`             | Get category by ID         |
| PUT           | `/api/categories/<id>/`             | Update category            |
| DELETE        | `/api/categories/<id>/`             | Delete category            |
| GET           | `/api/categories/<id>/products/`    | Products by category       |

## Admin Panel

Visit `http://127.0.0.1:8000/admin/` to manage data.

## Postman

Import `OnlineShopAPI.postman_collection.json` into Postman to test all 11 endpoints.
