from django.db import models

class Hospital(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    emergency_services = models.BooleanField(default=False)
    beds_available = models.IntegerField(default=0)
    rating = models.FloatField(default=0.0)

    def __str__(self):
        return self.name

class Specialization(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
