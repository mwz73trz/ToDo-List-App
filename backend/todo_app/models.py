from django.db import models

class Task(models.Model):
    name = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    due_date = models.DateField()

    def __str__(self):
        return f"{self.name}"
