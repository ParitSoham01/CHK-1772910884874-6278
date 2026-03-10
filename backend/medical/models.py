from django.db import models
from users.models import PatientProfile, DoctorProfile
from core.models import Specialization

class TriageTestResult(models.Model):
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE, related_name='triage_results')
    symptoms = models.TextField()
    severity = models.IntegerField()
    duration = models.CharField(max_length=50)
    risk_score = models.IntegerField()
    urgency = models.CharField(max_length=20)
    recommended_specialization = models.ForeignKey(Specialization, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Appointment(models.Model):
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE, related_name='appointments')
    doctor = models.ForeignKey(DoctorProfile, on_delete=models.CASCADE, related_name='appointments')
    date = models.DateField()
    time = models.TimeField()
    status = models.CharField(max_length=50, default='Pending')
    priority = models.CharField(max_length=20, default='Low')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient.user.username} with {self.doctor.user.username} on {self.date}"

class LabTest(models.Model):
    name = models.CharField(max_length=255)
    test_type = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
