"""
Level 4 — Mixins
ListModelMixin, CreateModelMixin, RetrieveModelMixin,
UpdateModelMixin, DestroyModelMixin + GenericAPIView
"""
from rest_framework import mixins
from rest_framework.generics import GenericAPIView

from api.models import Product
from api.serializers import ProductSerializer


class ProductListAPIView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericAPIView,
):
    """
    GET  /api/products/ — list all products
    POST /api/products/ — create a new product
    """
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    GenericAPIView,
):
    """
    GET    /api/products/<id>/ — get one product
    PUT    /api/products/<id>/ — update product
    DELETE /api/products/<id>/ — delete product
    """
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
