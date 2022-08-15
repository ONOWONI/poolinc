from django.urls import path, re_path
from . import views


urlpatterns = [
    re_path(r'^api/products/$', views.product_list),
    re_path(r'^api/products/([0-9])$', views.product_detail),
]
