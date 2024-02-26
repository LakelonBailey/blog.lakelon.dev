# Package Imports
from django.core.management import base as management_base
import requests
import os


class Command(management_base.BaseCommand):
    def handle(self, *args, **options):
        url = f"{os.environ['SSO_SERVICE_ENDPOINT']}/api/identity/public-key/"
        response = requests.get(url)
        key = response.json()['public_key']
        with open('sso-public-key', 'w') as fl:
            fl.write(key)
