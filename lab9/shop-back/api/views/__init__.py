"""
Switch between view levels by changing the import below.

Level 2 (FBV):     from api.views.fbv      import products_list, product_detail
Level 3 (CBV):     from api.views.cbv      import ProductListAPIView, ProductDetailAPIView
Level 4 (Mixins):  from api.views.mixins   import ProductListAPIView, ProductDetailAPIView
Level 5 (Generic): from api.views.generics import ProductListAPIView, ProductDetailAPIView

Currently ACTIVE: Level 5 — Generic Views
"""

# ── Active level (change this line to switch) ─────────────────────────────────
from api.views.generics import (   # noqa: F401
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
