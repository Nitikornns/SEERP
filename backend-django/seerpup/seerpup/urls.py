from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import path
from rest_framework import routers, serializers, viewsets
from django.views.generic import TemplateView


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),

    url(r'^', include(router.urls)),
    #url(r'^', TemplateView.as_view(template_name='base.html')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]