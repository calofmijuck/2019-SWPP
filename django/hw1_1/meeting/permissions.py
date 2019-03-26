from rest_framework import permissions


class OwnerOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Permission only when the user equals the owner
        return obj.user == request.user
