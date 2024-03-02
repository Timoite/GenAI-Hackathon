from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def process_input(request):
    if request.method == 'POST':
        title = request.POST.get('title', '')
        description = request.POST.get('description', '')
        
        # Process the input data here (e.g., perform some calculations)
        processed_data = f"Title: {title}, Description: {description}".upper()  # Example: Concatenate and convert to uppercase
        
        return JsonResponse({'processed_data': processed_data})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

