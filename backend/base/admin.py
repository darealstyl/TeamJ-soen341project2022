from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from .models import *

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)

class AccountInline(admin.StackedInline):
    model = Account
    can_delete = False
    verbose_name_plural = 'Accounts'
    
class CustomizedUserAdmin(UserAdmin):
    inlines = (AccountInline, )
    
admin.site.unregister(User)
admin.site.register(User, CustomizedUserAdmin)

admin.site.register(Account)