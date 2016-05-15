from django.shortcuts import render, HttpResponse

from django.template import RequestContext, loader
from django.http import HttpResponseRedirect
from django.http import JsonResponse

from django.views.generic import View


from django.contrib.auth.decorators import login_required, permission_required



    #return render(request, 'buildMachine/projects/index.html', context)

# Create your views here.

@login_required
def invite(request):
    context = {}

    #t = loader.get_template('buildMachine/projects/index.html')
    #c = RequestContext(request, {'projects': projects})
    #print c
    #return HttpResponse(t.render(c))


    return render(request, 'invite.html', context)
    #return HttpResponseRedirect(reverse('wedLanding:invite'))

@login_required
def accept_invite(request):
    print 11111111111111111111111111111111111111111111111111
    

    #t = loader.get_template('buildMachine/projects/index.html')
    #c = RequestContext(request, {'projects': projects})
    #print c
    #return HttpResponse(t.render(c))

    print request.POST
    return JsonResponse({'succes': True})



class AcceptView(View):
    def get(self, request):
        project = get_object_or_404(Project, pk=project_id)
    
        #assign_perm(
        #assign perm
        pr1 = Project.objects.get(id=1)
        UserObjectPermission.objects.assign_perm('build_project', user=request.user, obj=pr1)
        UserObjectPermission.objects.assign_perm('pr_1', user=request.user, obj=pr1)
        #UserObjectPermission.objects.assign_perm('buildMachine.change_project', user=request.user, obj=pr1)
        assign_perm('buildMachine.change_project', request.user, pr1)
        if request.user.has_perm('build_project', pr1):
            print 222222222222222222222
        if request.user.has_perm('buildMachine.pr_1'):
            print 'pr 1111111111111111111111'
        if request.user.has_perm('buildMachine.pr_2'):
            print 'pr 2222222222222222222222'
    
        #return render(request, 'buildMachine/projects/detail.html', {'project': project})
        context = {'project': project}
        t = loader.get_template('buildMachine/projects/detail.html')
        c = RequestContext(request, {'project': project})
    
        return HttpResponse(t.render(c))


    def post(self, request):
        data = {request.POST['name']: request.POST['value']}
        res = Project.objects.filter(id=project_id).update(**data)

        return HttpResponse(res)
