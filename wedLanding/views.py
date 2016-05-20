from django.shortcuts import render, HttpResponse
from django.template import RequestContext, loader
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.views.generic import View
from django.contrib.auth.decorators import login_required, permission_required
import json 
from .models import Guest

@login_required
def invite(request):
    context = {}
    return render(request, 'invite.html', context)

@login_required
def accept_invite(request):

    print request.POST
    print json.loads(request.POST['comming'])
    #add guest
    guest = Guest(
        name = request.POST['name'],
        email = request.POST['email'],
        guest_comment = request.POST['comment'],
        pair = json.dumps(request.POST['pair']),
        comming = json.loads(request.POST['comming'])
    )
    guest.save()

    return JsonResponse({'succes': True})

