"""
Level 5 — Generic Views (minimal code, maximum power)
ListCreateAPIView, RetrieveUpdateDestroyAPIView
This is the ACTIVE level used by __init__.py
"""
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


# ── Product Views ─────────────────────────────────────────────────────────────

class ProductListAPIView(generics.ListCreateAPIView):
    """
    GET  /api/products/ — list all products
    POST /api/products/ — create a new product
    """
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/products/<id>/ — get one product
    PUT    /api/products/<id>/ — update product
    DELETE /api/products/<id>/ — delete product
    """
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


# ── Category Views ────────────────────────────────────────────────────────────

class CategoryListAPIView(generics.ListCreateAPIView):
    """
    GET  /api/categories/ — list all categories
    POST /api/categories/ — create a new category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/categories/<id>/ — get one category
    PUT    /api/categories/<id>/ — update category
    DELETE /api/categories/<id>/ — delete category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    """
    GET /api/categories/<id>/products/ — list products by category
    """
    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return Response(
                {'error': 'Category not found'},
                status=status.HTTP_404_NOT_FOUND,
            )
        products = Product.objects.select_related('category').filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
