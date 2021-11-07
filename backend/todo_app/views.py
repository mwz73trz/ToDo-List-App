from rest_framework.viewsets import ModelViewSet
from todo_app.models import Task
from todo_app.serializers import TaskSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
