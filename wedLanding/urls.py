from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.invite, name = 'invite'),
    url(r'^accept_invite$', views.accept_invite, kwargs=None, name = 'accept_invite'),


]
