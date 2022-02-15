

from django.urls import path, include
from .views import BirthdayList, BirthdayDetail

urlpatterns = [

    path('list/<int:uid>', BirthdayList.as_view()),
    path('list/<int:uid>/<int:id>', BirthdayDetail.as_view()),
    path('list/', BirthdayList.as_view()),

]
