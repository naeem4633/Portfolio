# project/template_loaders.py

from django.template.loaders.base import Loader
from django.template import TemplateDoesNotExist
from django.urls import resolve
from pathlib import Path
import os

class ConditionalLoader(Loader):
    def get_contents(self, origin):
        current_url = resolve(origin.template_name)
        app_name = current_url.app_name

        if app_name == 'musicFrontend':
            template_path = Path(MUSIC_FRONTEND_DIR)
        elif app_name == 'furnitureFrontend':
            template_path = Path(FURNITURE_FRONTEND_DIR)
        elif app_name == 'photographerFrontend':
            template_path = Path(PHOTOGRAPHER_FRONTEND_DIR)
        elif app_name == 'cosmeticsFrontend':
            template_path = Path(COSMETICS_FRONTEND_DIR)
        else:
            raise TemplateDoesNotExist(f"Template loader doesn't support app: {app_name}")

        template_file = template_path / current_url.view_name
        try:
            with template_file.open() as f:
                return f.read()
        except FileNotFoundError:
            raise TemplateDoesNotExist(origin)

    def get_template_sources(self, template_name):
        # This method is required for template loaders.
        # We return an empty list as we're not using it.
        return []

BASE_DIR = Path(__file__).resolve().parent.parent
MUSIC_FRONTEND_DIR = os.path.join(BASE_DIR, 'musicFrontend/build')
FURNITURE_FRONTEND_DIR = os.path.join(BASE_DIR, 'furnitureFrontend/build')
PHOTOGRAPHER_FRONTEND_DIR = os.path.join(BASE_DIR, 'photographerFrontend/build')
COSMETICS_FRONTEND_DIR = os.path.join(BASE_DIR, 'cosmeticsFrontend/build')
