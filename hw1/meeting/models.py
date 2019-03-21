from django.db import models

# Create your models here.

class Reservation(models.Model):
    created = models.DateTimeField(auto_now_add = True)
    sinceWhen = models.DateTimeField()
    tilWhen = models.DateTimeField()
    user = models.ForeignKey('User', on_delete=models.DO_NOTHING)

    def __str__(self):
        return str(self.id)

    class Meta:
        ordering = ('created', )


class User(models.Model):
    username = models.CharField(max_length = 50)

    def __str__(self):
        return self.username