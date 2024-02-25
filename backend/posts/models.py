from django.db import models
from main.models import BaseClass


class Post(BaseClass):
    title = models.CharField(null=True, max_length=100)
