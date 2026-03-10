from rest_framework import viewsets
from .models import PatientProfile, DoctorProfile, User, FamilyMember
from .serializers import PatientProfileSerializer, DoctorProfileSerializer, UserSerializer, FamilyMemberSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PatientProfileViewSet(viewsets.ModelViewSet):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer

class FamilyMemberViewSet(viewsets.ModelViewSet):
    queryset = FamilyMember.objects.all()
    serializer_class = FamilyMemberSerializer

class DoctorProfileViewSet(viewsets.ModelViewSet):
    queryset = DoctorProfile.objects.all()
    serializer_class = DoctorProfileSerializer
