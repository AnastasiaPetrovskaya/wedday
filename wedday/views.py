from django.shortcuts import render, HttpResponse
from django.template import RequestContext, loader
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.views.generic import View
from django.contrib.auth.decorators import login_required, permission_required
import json 

from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth import login
from backend import SettingsBackend


import json
from django import forms

def custom_auth(request):
    if request.POST:
        print(222222222222222222222)
        print request
        cd = SettingsBackend()
        login(username=request.POST.username)
        if user:
            # check if user is_active, and any other checks
            login(request, user)
        else:
            return user_not_found_bad_hash_message
    else:
        return render(request, 'registration/login.html')


def SettingsBackend(request):

    if request.POST:
        print request.POST['password']

        user = authenticate(username=request.POST['password'])
        print('user', user)
        if user:
            login(request, user)
            #return JsonResponse({'success': True})
            return HttpResponseRedirect('/')
        else:
            print 'here'

            #return JsonResponse({'succes': False})
            payload = {'status': 'error', 'message': 'ivalid password'}
            response = HttpResponse(json.dumps(payload), content_type='application/json')
            response.status_code = 200
            return JsonResponse({'success': True})            
            #return JsonResponse({'succes': False})
            #return HttpResponse('USer Not found')
            #raise forms.ValidationError('Passwords do not match.')
            #return user_not_found_bad_hash_message
    else:
        return render(request, 'registration/login.html')



