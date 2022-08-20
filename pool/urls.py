from django.urls import re_path
from . import views


urlpatterns = [
    re_path(r'^$', views.api_overview),
    re_path('api/products', views.product_list),
    re_path('api/reviews', views.review_list),
]