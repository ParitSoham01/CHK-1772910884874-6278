from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import TriageTestResult, Appointment, LabTest
from .serializers import TriageTestResultSerializer, AppointmentSerializer, LabTestSerializer
from users.models import DoctorProfile
from users.serializers import DoctorProfileSerializer

class TriageTestResultViewSet(viewsets.ModelViewSet):
    queryset = TriageTestResult.objects.all()
    serializer_class = TriageTestResultSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        # Calculate Risk Logic on backend instead of frontend
        severity = int(data.get('severity', 0))
        duration = data.get('duration', '')
        
        base_score = severity * 12
        duration_mult = 25 if duration == 'weeks' else 20 if duration == 'days' else 10
        risk_score = min(100, base_score + duration_mult)
        
        urgency = 'High' if risk_score >= 70 else 'Medium' if risk_score >= 40 else 'Low'
        
        # Inject backend calculations into save payload
        data['risk_score'] = risk_score
        data['urgency'] = urgency

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class LabTestViewSet(viewsets.ModelViewSet):
    queryset = LabTest.objects.all()
    serializer_class = LabTestSerializer

class RecommendationViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'])
    def get_doctors(self, request):
        specialization_id = request.query_params.get('specialization_id')
        if not specialization_id:
            return Response({"error": "specialization_id is required"}, status=status.HTTP_400_BAD_REQUEST)
            
        doctors = DoctorProfile.objects.filter(specialization_id=specialization_id)
        
        # Sort by rating and availability len (mock calculation)
        doctors = sorted(doctors, key=lambda x: x.rating + (len(x.availability) * 0.1), reverse=True)[:3]
        
        serializer = DoctorProfileSerializer(doctors, many=True)
        return Response(serializer.data)
