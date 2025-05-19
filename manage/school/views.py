from django.shortcuts import render

def index(request): 
    return render(request, "home/home.html")

def administration(request):  
    return render(request, "home/administration.html")
def finance(request):
    return render(request,"home/finance.html")
def science(request):  
    return render(request, "home/science.html") 
def language(request):
    return render(request,"home/language.html")
def math(request):
    return render(request,"home/maths.html")
def hummanities(request):
    return render(request,'home/human.html')
def sports(request):
    return render(request,"home/sports.html")

def student(request):
    return render(request, "home/student.html") 
def techniques(request):
    return render(request,'home/techniques.html')