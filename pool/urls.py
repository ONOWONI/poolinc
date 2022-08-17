from django.urls import re_path
from . import views


urlpatterns = [
    re_path(r'^api/$', views.api_overview),
    re_path(r'^api/products/$', views.product_list),
    re_path(r'^api/reviews/$', views.review_list),
]
