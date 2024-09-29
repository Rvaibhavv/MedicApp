from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    dob = models.DateField()
    password = models.CharField(max_length=128)

    def save(self, *args, **kwargs):
        # Hash the password before saving
        if self.pk is None:  # Only hash if creating a new user
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
