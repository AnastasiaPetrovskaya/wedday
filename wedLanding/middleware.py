from django.core.urlresolvers import reverse
from django.http import Http404

class AdminAccess(object):
    print 'custom middleware'
    def process_request(self, request):
        if request.path.startswith(reverse('admin:index')):
            if request.user.is_authenticated():
                if not request.user.is_superuser:
                    raise Http404
            else:
                raise Http404
