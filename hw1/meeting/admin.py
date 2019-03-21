from django.contrib import admin
from meeting.models import Reservation, User

# Register your models here.
admin.site.register(Reservation)
admin.site.register(User)