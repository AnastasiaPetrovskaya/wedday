from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.invite, name = 'invite'),
    url(r'^accept_invite$', views.accept_invite, kwargs=None, name = 'accept_invite'),
    url(r'^accept$', views.AcceptView.as_view(), name = 'accept_invite'),


]
