from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    year_of_birth = models.DateField()
    tg = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    about_ur_self = models.TextField()
    photo = models.ImageField(upload_to='user_photos/', null=True, blank=True)
