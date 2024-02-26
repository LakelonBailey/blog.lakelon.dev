from django.http import HttpRequest, JsonResponse
from django.views import View
import requests
import os


class AccessTokenView(View):

    def post(self, request: HttpRequest, code: str):
        payload = {
            'client_secret': os.environ['SSO_CLIENT_SECRET'],
            'client_id': os.environ['SSO_CLIENT_ID'],
            'code': code
        }
        print('########### IN HERE #############')
        response = requests.post(
            f"{os.environ['SSO_SERVICE_ENDPOINT']}/api/identity/authorize/",
            json=payload
        )

        if response.status_code != 200:
            return JsonResponse({
                'success': False
            })

        return JsonResponse(response.json())
