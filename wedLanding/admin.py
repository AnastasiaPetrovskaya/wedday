from django.contrib import admin

from .models import Guest
import json
import ast
from django.utils.html import format_html_join
from django.utils.safestring import mark_safe

class GuestAdmin(admin.ModelAdmin):
    date_hierarhy = 'created'
    empty_value_display = '---'
    list_display = ('name', 'comming', 'created', 'view_pair')
    fields = (
            ('name', 'comming'), 'email', 'view_pair', 'created', 
            'guest_comment', 'our_comment')

    def view_pair(self, obj):
        a = json.loads(obj.pair)
        b = ast.literal_eval(a)
        result = ''
        for item in b:
            result = result + item + '; '
        return result

    view_pair.short_name = 'pair'
    readonly_fields = ('view_pair', 'created')

 
admin.site.register(Guest, GuestAdmin)

