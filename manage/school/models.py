from django.db import models
from django.utils.text import slugify

class Parent(models.Model):
    parent_name = models.CharField(max_length=100)
    parent_number = models.CharField(max_length=15)
    email = models.EmailField(blank=True, null=True)
    
    def __str__(self):
        return self.parent_name

class Student(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    
    RELIGION_CHOICES = [
        ('christian', 'Christian'),
        ('muslim', 'Muslim'),
        ('hindu', 'Hindu'),
        ('other', 'Other'),
    ]
    
    CLASS_CHOICES = [
        ('form1', 'Form 1'),
        ('form2', 'Form 2'),
        ('form3', 'Form 3'),
        ('form4', 'Form 4'),
    ]
    
    STREAM_CHOICES = [
        ('north', 'North'),
        ('south', 'South'),
        ('east', 'East'),
        ('west', 'West'),
    ]
    
    student_image = models.ImageField(upload_to='students/', blank=True, null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    address = models.TextField()
    tribe = models.CharField(max_length=50, blank=True, null=True)
    religion = models.CharField(max_length=20, choices=RELIGION_CHOICES)
    previous_school = models.CharField(max_length=100, blank=True, null=True)
    health_details = models.TextField(blank=True, null=True)
    admission_class = models.CharField(max_length=10, choices=CLASS_CHOICES)
    stream = models.CharField(max_length=10, choices=STREAM_CHOICES)
    admission_date = models.DateField(auto_now_add=True)
    parent = models.ForeignKey(Parent, on_delete=models.SET_NULL, null=True, blank=True)
    slug = models.SlugField(max_length=255, blank=True, unique=True)
    student_id = models.CharField(max_length=20, unique=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.student_id:
            # Generate student ID based on admission year and auto-increment
            year = self.admission_date.year
            last_student = Student.objects.filter(admission_date__year=year).order_by('-student_id').first()
            if last_student and last_student.student_id:
                last_num = int(last_student.student_id[-4:])
                new_num = last_num + 1
            else:
                new_num = 1
            self.student_id = f"{year}-{new_num:04d}"
            
        if not self.slug:
            self.slug = slugify(f"{self.first_name}-{self.last_name}-{self.student_id}")
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.student_id})"

class Teacher(models.Model):
    POSITION_CHOICES = [
        ('teacher', 'Teacher'),
        ('hod', 'Head of Department'),
        ('deputy', 'Deputy Principal'),
        ('principal', 'Principal'),
    ]
    
    SUBJECT_CHOICES = [
        ('math', 'Mathematics'),
        ('english', 'English'),
        ('kiswahili', 'Kiswahili'),
        ('physics', 'Physics'),
        ('chemistry', 'Chemistry'),
        ('biology', 'Biology'),
        ('history', 'History'),
        ('geography', 'Geography'),
        ('cre', 'CRE'),
        ('business', 'Business Studies'),
        ('computer', 'Computer Studies'),
    ]
    
    teacher_image = models.ImageField(upload_to='teachers/', blank=True, null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    tsc_number = models.CharField(max_length=20, unique=True)
    id_number = models.CharField(max_length=20)
    position = models.CharField(max_length=20, choices=POSITION_CHOICES, default='teacher')
    subjects = models.CharField(max_length=100)
    class_in_charge = models.CharField(max_length=20, blank=True, null=True)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(blank=True, null=True)
    date_hired = models.DateField()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.tsc_number})"

class Staff(models.Model):
    DEPARTMENT_CHOICES = [
        ('administration', 'Administration'),
        ('finance', 'Finance'),
        ('academics', 'Academics'),
        ('health', 'Health'),
        ('maintenance', 'Maintenance'),
    ]
    
    staff_image = models.ImageField(upload_to='staff/', blank=True, null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    position = models.CharField(max_length=100)
    department = models.CharField(max_length=20, choices=DEPARTMENT_CHOICES)
    employee_id = models.CharField(max_length=20, unique=True)
    id_number = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(blank=True, null=True)
    date_hired = models.DateField()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.employee_id})"