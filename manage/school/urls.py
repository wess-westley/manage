
from django.contrib import admin
from django.urls import path
from . import views  
urlpatterns = [
    path('', views.index, name="index"),  
    path('administration/', views.administration, name="administration"),  
    path('finance/', views.finance, name="finance"),
    path('science/', views.science, name="science"),
    path('language/', views.language, name="language"),
    path('math/',views.math,name="math"),
    path('hummanities/',views.hummanities,name="human"),
    path("sport/",views.sports,name="sports"),
    
    path("student/", views.student, name='student'),
    path("techniques/",views.techniques,name='techniques'),
    
]

