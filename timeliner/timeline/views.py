from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .main import get_timeline


@csrf_exempt
def process_input(request):
    if request.method == 'POST':
        print('abc')
        subject = request.POST.get('subject', '')
        print('subject:', subject)
        result = get_timeline(subject)
        return JsonResponse(result, safe=False)
    
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

