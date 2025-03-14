from django.shortcuts import render
from django.http import HttpResponse
from .models import *

# Create your views here.
def index(request):
    about = About.objects.all()
    education = Education.objects.all()
    skills = Skills.objects.all()
    experience = Experience.objects.all()
    projects = Projects.objects.all()
    services = Service.objects.all()
    link = Links.objects.all()
    
    context = {
        'about':about,
        'education':education,
        'skills':skills,
        'experience':experience,
        'projects':projects,
        'service':services,
        'link':link
    }
    return render(request,'index.html',context)


def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Save the data to database
        Contact.objects.create(name=name,email=email,message=message)
    return render(request,'index.html')