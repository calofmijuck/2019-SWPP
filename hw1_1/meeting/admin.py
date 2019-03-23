from django.contrib import admin
from .models import Reservation
from django.contrib.auth.models import User

# Register your models here.
admin.site.unregister(User)
admin.site.register(Reservation)
admin.site.register(User)