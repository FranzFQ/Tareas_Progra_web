from django.db import models

# Create your models here.

class Student(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    enrollment_date = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    emergency_number = models.CharField(max_length=15)
    course = models.CharField(max_length=50, default="Undeclared")

class Teacher(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    hire_date = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    course = models.CharField(max_length=50, default="General")

class Course(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    credits = models.IntegerField()

class PhoneNumber(models.Model):
    id = models.AutoField(primary_key=True)
    number = models.CharField(max_length=15)
    type = models.CharField(max_length=10)

class EmergencyNumber(models.Model):
    id = models.AutoField(primary_key=True)
    number = models.CharField(max_length=15)
    relation = models.CharField(max_length=20)

class CourseDetail(models.Model):
    id = models.AutoField(primary_key=True)