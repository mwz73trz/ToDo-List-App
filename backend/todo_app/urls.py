from django.db import router
from django.urls import path, include
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from todo_app.views import TaskViewSet

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('', include(router.urls)),
]

