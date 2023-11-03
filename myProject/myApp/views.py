from django.shortcuts import render, redirect
from .forms import UserProfileForm
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create_user_profile(request):
    if request.method == 'POST':
        form = UserProfileForm(request.POST, request.FILES)
        if form.is_valid():
            user_profile = form.save(commit=False)  
            user_profile.photo = request.FILES['photo']
            user_profile.save()

            return redirect('user_profile_created')
    else:
        form = UserProfileForm()

    return render(request, 'myApp/index.html', {'form': form})

def user_profile_created(request):
    return render(request, 'myApp/index2.html')
