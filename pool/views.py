from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Product, Review
from .serializers import *


# Create your views here.


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'products' : '/api/products/',
        'reviews' : '/api/reviews/',
    }

    return Response(api_urls)

@api_view(['GET'])
def product_list(request):
    if request.method =='GET' :
        data = Product.objects.all()
        serializer = ProductSerializer(data, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def review_list(request):
    if request.method == 'GET':
        data = Review.objects.all()
        serializer = ReviewSerializer(data, many=True)

        return Response(serializer.data)
    elif request.method =='POST' :
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)