# admin.py
from django.contrib import admin
from .models import Student, Parent

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'admission_class', 'stream', 'admission_date')
    list_filter = ('admission_class', 'stream', 'gender')
    search_fields = ('first_name', 'last_name')
    prepopulated_fields = {'slug': ('first_name', 'last_name')}

@admin.register(Parent)
class ParentAdmin(admin.ModelAdmin):
    list_display = ('parent_name', 'parent_number', 'email')
    search_fields = ('parent_name', 'parent_number')