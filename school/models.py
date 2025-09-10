from django.db import models

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    enrollment_date = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    emergency_number = models.CharField(max_length=15)
    course = models.CharField(max_length=50, default="Undeclared")


class Teacher(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    hire_date = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    course = models.CharField(max_length=50, default="General")