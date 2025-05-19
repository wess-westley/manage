from django import forms
from .models import Student, Parent, Teacher, Staff

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'
        widgets = {
            'date_of_birth': forms.DateInput(attrs={'type': 'date'}),
            'health_details': forms.Textarea(attrs={'rows': 3}),
            'admission_date': forms.DateInput(attrs={'type': 'date'}),
        }

class ParentForm(forms.ModelForm):
    class Meta:
        model = Parent
        fields = '__all__'

class TeacherForm(forms.ModelForm):
    class Meta:
        model = Teacher
        fields = '__all__'
        widgets = {
            'date_hired': forms.DateInput(attrs={'type': 'date'}),
            'subjects': forms.TextInput(attrs={'placeholder': 'Separate subjects with commas'}),
        }

class StaffForm(forms.ModelForm):
    class Meta:
        model = Staff
        fields = '__all__'
        widgets = {
            'date_hired': forms.DateInput(attrs={'type': 'date'}),
        }