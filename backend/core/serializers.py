from rest_framework import serializers
from .models import Hospital, Specialization

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = '__all__'

class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'
