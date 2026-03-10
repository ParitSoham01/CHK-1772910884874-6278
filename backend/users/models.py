from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_patient = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)

class PatientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='patient_profile')
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=20, blank=True)
    height_cm = models.FloatField(null=True, blank=True)
    weight_kg = models.FloatField(null=True, blank=True)
    blood_group = models.CharField(max_length=10, blank=True)
    medical_conditions = models.TextField(blank=True)
    allergies = models.TextField(blank=True)
    chronic_diseases = models.TextField(blank=True)
    current_medications = models.TextField(blank=True)
    emergency_contact_name = models.CharField(max_length=100, blank=True)
    emergency_contact_phone = models.CharField(max_length=20, blank=True)

class FamilyMember(models.Model):
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE, related_name='family_members')
    name = models.CharField(max_length=255)
    relation = models.CharField(max_length=100)
    age = models.IntegerField()
    medical_history = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.name} ({self.relation})"

class DoctorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='doctor_profile')
    specialization = models.CharField(max_length=100)
    hospital = models.CharField(max_length=255)
    rating = models.FloatField(default=0.0)
    availability = models.JSONField(default=list)  # Storing list of available strings

    def __str__(self):
        return f"Dr. {self.user.get_full_name()} - {self.specialization}"
