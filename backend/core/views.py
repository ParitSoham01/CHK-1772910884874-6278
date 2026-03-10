from rest_framework import viewsets
from .models import Hospital, Specialization
from .serializers import HospitalSerializer, SpecializationSerializer

class HospitalViewSet(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer

class SpecializationViewSet(viewsets.ModelViewSet):
    queryset = Specialization.objects.all()
    serializer_class = SpecializationSerializer
