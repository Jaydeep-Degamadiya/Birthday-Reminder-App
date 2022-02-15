from django.contrib import admin
from .models import Birthday

# Register your models here.


@admin.register(Birthday)
class BirthdayModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email']


# admin.site.register(Birthday)
