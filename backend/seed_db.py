  import os
import django
import sys

# Set up Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'healthcare_backend.settings')
django.setup()

from core.models import Hospital, Specialization
from users.models import User, DoctorProfile

def run():
    print("Clearing database...")
    DoctorProfile.objects.all().delete()
    Specialization.objects.all().delete()
    Hospital.objects.all().delete()
    User.objects.filter(is_doctor=True).delete()

    print("Seeding specializations...")
    specs = [
        "Cardiologist", "Neurologist", "Dermatologist", 
        "Pediatrician", "General Physician", "Orthopedic"
    ]
    spec_objects = {}
    for spec_name in specs:
        spec, _ = Specialization.objects.get_or_create(name=spec_name, description=f"Specialist in {spec_name}")
        spec_objects[spec_name] = spec

    print("Seeding hospitals...")
    hospitals = [
        {"name": "City General Hospital", "address": "123 Main St", "emergency": True, "beds": 45, "rating": 4.8},
        {"name": "Metro Health Center", "address": "456 Park Ave", "emergency": True, "beds": 12, "rating": 4.5},
        {"name": "Care Clinic", "address": "789 Oak Rd", "emergency": False, "beds": 0, "rating": 4.2},
        {"name": "Sports Medicine Institute", "address": "321 Elm St", "emergency": False, "beds": 20, "rating": 4.4}
    ]
    hosp_objects = {}
    for h in hospitals:
        hosp, _ = Hospital.objects.get_or_create(
            name=h["name"], address=h["address"], 
            emergency_services=h["emergency"], beds_available=h["beds"], rating=h["rating"]
        )
        hosp_objects[h["name"]] = hosp

    print("Seeding doctors...")
    mock_doctors = [
        {"name": "Dr. Sarah Johnson", "spec": "Cardiologist", "hosp": "City General Hospital", "rating": 4.8, "avail": ["9:00 AM", "2:00 PM"]},
        {"name": "Dr. Michael Chen", "spec": "Neurologist", "hosp": "Metro Health Center", "rating": 4.9, "avail": ["11:00 AM", "3:30 PM"]},
        {"name": "Dr. Emily Davis", "spec": "Dermatologist", "hosp": "Care Clinic", "rating": 4.7, "avail": ["10:00 AM", "1:00 PM"]},
        {"name": "Dr. Robert Smith", "spec": "Pediatrician", "hosp": "City General Hospital", "rating": 4.6, "avail": ["9:30 AM", "4:00 PM"]},
        {"name": "Dr. Lisa Wong", "spec": "General Physician", "hosp": "Metro Health Center", "rating": 4.8, "avail": ["8:00 AM", "12:00 PM", "5:00 PM"]},
        {"name": "Dr. James Wilson", "spec": "Orthopedic", "hosp": "Sports Medicine Institute", "rating": 4.5, "avail": ["10:30 AM", "2:30 PM"]},
        {"name": "Dr. Rakesh Kumar", "spec": "Cardiologist", "hosp": "Metro Health Center", "rating": 4.7, "avail": ["1:00 PM", "5:00 PM"]},
        {"name": "Dr. Priya Sharma", "spec": "General Physician", "hosp": "Care Clinic", "rating": 4.9, "avail": ["10:00 AM", "12:00 PM", "3:00 PM"]},
        {"name": "Dr. Amit Patel", "spec": "Pediatrician", "hosp": "City General Hospital", "rating": 4.5, "avail": ["11:00 AM", "2:00 PM"]},
        {"name": "Dr. Sneha Desai", "spec": "Dermatologist", "hosp": "Sports Medicine Institute", "rating": 4.8, "avail": ["9:00 AM", "11:00 AM", "4:00 PM"]}
    ]
    
    for i, d in enumerate(mock_doctors):
        user, _ = User.objects.get_or_create(username=f"doc_{i}", email=f"doc{i}@example.com", is_doctor=True, first_name=d["name"].split(' ')[1], last_name=d["name"].split(' ')[2] if len(d["name"].split(' ')) > 2 else "")
        user.set_password("password123")
        user.save()
        
        DoctorProfile.objects.create(
            user=user,
            specialization=spec_objects[d["spec"]].name,
            hospital=hosp_objects[d["hosp"]].name,
            rating=d["rating"],
            availability=d["avail"]
        )

    print("Database seeding completed successfully.")

if __name__ == "__main__":
    run()
