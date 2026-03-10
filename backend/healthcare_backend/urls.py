from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users.views import UserViewSet, PatientProfileViewSet, DoctorProfileViewSet, FamilyMemberViewSet
from core.views import HospitalViewSet, SpecializationViewSet
from medical.views import TriageTestResultViewSet, AppointmentViewSet, LabTestViewSet, RecommendationViewSet

router = DefaultRouter()

# Users App
router.register(r'users', UserViewSet)
router.register(r'patients', PatientProfileViewSet)
router.register(r'doctors', DoctorProfileViewSet)
router.register(r'family-members', FamilyMemberViewSet)

# Core App
router.register(r'hospitals', HospitalViewSet)
router.register(r'specializations', SpecializationViewSet)

# Medical App
router.register(r'triage-results', TriageTestResultViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'lab-tests', LabTestViewSet)
router.register(r'recommendations', RecommendationViewSet, basename='recommendation')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
