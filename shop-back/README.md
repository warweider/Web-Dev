# shop-back — Django REST API

Backend API for the Angular Online Store (Lab 8).

## Project Structure

```
shop-back/
├── shop_back/          # Django project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── api/                # Main app
│   ├── migrations/
│   ├── models.py       # Category & Product models
│   ├── views.py        # API views (JSON responses)
│   ├── urls.py         # API URL patterns
│   └── admin.py
├── manage.py
├── seed.py             # Sample data loader
├── requirements.txt
└── .gitignore
```

## Setup & Run

```bash
# 1. Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Apply migrations
python manage.py migrate

# 4. (Optional) Load sample data
python seed.py

# 5. (Optional) Create admin superuser
python manage.py createsuperuser

# 6. Start the server
python manage.py runserver
```

## API Endpoints

| Method | Endpoint                            | Description                  |
|--------|-------------------------------------|------------------------------|
| GET    | `/api/products/`                    | List all products             |
| GET    | `/api/products/<id>/`               | Get one product by ID         |
| GET    | `/api/categories/`                  | List all categories           |
| GET    | `/api/categories/<id>/`             | Get one category by ID        |
| GET    | `/api/categories/<id>/products/`    | List products by category     |

## Example Responses

### `GET /api/products/`
```json
[
  {
    "id": 1,
    "name": "iPhone 15",
    "price": 999.99,
    "description": "Latest Apple smartphone with A16 chip.",
    "count": 50,
    "is_active": true,
    "category": {
      "id": 1,
      "name": "Electronics"
    }
  }
]
```

### `GET /api/categories/`
```json
[
  { "id": 1, "name": "Electronics" },
  { "id": 2, "name": "Clothing" }
]
```

## Admin Panel

Visit `http://127.0.0.1:8000/admin/` to manage data via Django admin.
