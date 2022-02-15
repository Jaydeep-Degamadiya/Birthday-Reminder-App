from django.db import models

# Create your models here.

# from django.db import models
# from user.models import Userc

# Create your models here.


class Birthday(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    birthdate = models.DateField()
    user_id = models.IntegerField(default='1')
    # uid = models.ForeignKey(
    #     User, on_delete=models.CASCADE, related_name='birthday_id', default='1')

    class Meta:
        ordering = ('-birthdate',)

    def __str__(self):
        return self.name
