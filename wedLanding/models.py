from __future__ import unicode_literals

from django.db import models

from django.utils.encoding import python_2_unicode_compatible
import json
import ast

# Create your models here.

@python_2_unicode_compatible
class Guest(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=100)
    guest_comment = models.CharField(max_length=300, null=True)
    comming = models.BooleanField()
    pair = models.TextField(null=True)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    our_comment = models.CharField(max_length=300, null=True)
    
    def __str__(self):
        return self.name

    def get_pair(self):
        a = json.loads(self.pair)
        b = ast.literal_eval(a)
        result = ''
        for item in b:
            result = result + item + '; '
        return b
