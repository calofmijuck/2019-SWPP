from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Reservation(models.Model):
    created = models.DateTimeField(auto_now_add = True)
    sinceWhen = models.DateTimeField()
    tilWhen = models.DateTimeField()
    user = models.ForeignKey(User, related_name="meetings", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


    class Meta:
        ordering = ('created', )