from django.contrib import admin
from .models import NewUser


@admin.register(NewUser)
class BirthdayModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email']
