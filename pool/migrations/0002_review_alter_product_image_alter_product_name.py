# Generated by Django 4.1 on 2022-08-17 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("pool", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Review",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                ("review", models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.CharField(default="img_default.jpg", max_length=50),
        ),
        migrations.AlterField(
            model_name="product", name="name", field=models.CharField(max_length=240),
        ),
    ]
