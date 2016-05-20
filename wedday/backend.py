from django.conf import settings
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User

from django.contrib.auth.backends import ModelBackend


class SettingsBackend(ModelBackend):


    def authenticate(self, username=None, password=None):
        print 'custom auth'
        #print username
        #print password
        try:
            return User.objects.get(username=password)
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

    def has_perm(self, user_obj, perm, obj=None):
        if user_obj.username == settings.ADMIN_LOGIN:
            return True
        else:
            return False
