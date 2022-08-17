from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=240)
    price = models.FloatField()
    quantity = models.IntegerField()
    desc = models.TextField()
    image = models.CharField(max_length=50, default="img_default.jpg")

    def __str__(self):
        return f'{self.name} - ${self.price} - {self.quantity} left'



class Review(models.Model):
    name = models.CharField(max_length=50)
    review = models.TextField()