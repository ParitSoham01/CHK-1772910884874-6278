from rest_framework import serializers
from .models import User, PatientProfile, DoctorProfile, FamilyMember

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_patient', 'is_doctor', 'first_name', 'last_name')

class FamilyMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = FamilyMember
        fields = '__all__'

class PatientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    family_members = FamilyMemberSerializer(many=True, read_only=True)

    class Meta:
        model = PatientProfile
        fields = '__all__'

class DoctorProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = DoctorProfile
        fields = '__all__'
