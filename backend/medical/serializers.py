from rest_framework import serializers
from .models import TriageTestResult, Appointment, LabTest
from users.serializers import PatientProfileSerializer, DoctorProfileSerializer
from core.serializers import SpecializationSerializer

class TriageTestResultSerializer(serializers.ModelSerializer):
    recommended_specialization = SpecializationSerializer(read_only=True)
    recommended_specialization_id = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = TriageTestResult
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    patient = PatientProfileSerializer(read_only=True)
    doctor = DoctorProfileSerializer(read_only=True)
    patient_id = serializers.IntegerField(write_only=True)
    doctor_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Appointment
        fields = '__all__'

class LabTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabTest
        fields = '__all__'
