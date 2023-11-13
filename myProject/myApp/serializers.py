from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['name', 'gender', 'year_of_birth', 'tg', 'phone', 'about_ur_self', 'photo']