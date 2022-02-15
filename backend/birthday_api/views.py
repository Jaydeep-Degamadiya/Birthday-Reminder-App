from django.shortcuts import render
from rest_framework import generics
from .serializers import BithdaySerializer
from rest_framework import serializers
from .models import Birthday
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
# Create your views here.


class BirthdayList(APIView):
    def get(self, request, uid):
        articles = Birthday.objects.all().filter(user_id=uid)
        serializer = BithdaySerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BithdaySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class BirthdayDetail(APIView):
    def get_object(request, id, uid):
        try:
            return Birthday.objects.get(id=id, user_id=uid)
        except:
            raise Http404

    def get(self, request, id, uid):
        article = self.get_object(id, uid)
        serializer = BithdaySerializer(article)
        return Response(serializer.data)

    def put(self, request, id, uid):
        article = self.get_object(id, uid)
        serializer = BithdaySerializer(article, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, uid):
        article = self.get_object(id, uid)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
