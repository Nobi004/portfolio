from django.db import models
from django.utils import timezone

# Create your models here.
class About(models.Model):
    image = models.ImageField(upload_to="images")
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField()
    resume = models.FileField(upload_to='files')
    experience = models.IntegerField()
    project_success = models.IntegerField()
    rate = models.IntegerField()

    def __str__(self):
        return self.name
    
class Education(models.Model):
    Academy_name = models.CharField(max_length=100)
    year_of_completion = models.DateField()
    degree = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images')
    
    
    def __str__(self):
        return self.Academy_name
    
class Skills(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='icon')
    
    def __str__(self):
        return self.name

class Experience(models.Model):
    start_date = models.DateField(default=timezone.now)
    end_date = models.DateField(default=timezone.now)
    title= models.CharField(max_length=100)
    content = models.TextField()
    
    def __str__(self):
        return self.title

class Projects(models.Model):
    image= models.ImageField(upload_to='images')
    name = models.CharField(max_length=100)
    source_code = models.URLField(max_length=200)
    view_project = models.URLField(max_length=200)
    video = models.URLField(max_length=200)
    
    def __str__(self):
        return self.name
    

class Service(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images')  # Ensure this field is defined

    def __str__(self):
        return self.name
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    
    def __str__(self):
        return self.name
    
class Links(models.Model):
    name = models.CharField(max_length=100)
    link = models.URLField(max_length=200)
    icon = models.ImageField(upload_to='icon')
    
    def __str__(self):
        return self.name