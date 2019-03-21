from django.shortcuts import get_object_or_404, render

from meeting.models import Reservation, User

def index(request):
    reserve_list = Reservation.objects.all().order_by('-id')
    context = {'reserve_list' : reserve_list}
    return render(request, 'meeting/index.html', context)

def detail(request, reservation_id):
    reserve= get_object_or_404(Reservation, pk = reservation_id)
    return render(request, 'meeting/detail.html', {'reserve' : reserve})
