# django + django REST framework review

## django

### Python Installation

```bash
sudo apt-get install python3
sudo apt-get install python3-dev
sudo apt-get install python3-pip
pip3 install django
```

```bash
python3 -m django --version # 3.0.8
```

### Create a project

- Create a project with name `mysite`

```bash
django-admin startproject mysite
```

- Start the server!

```bash
cd mysite
python3 manage.py runserver
python3 manage.py runserver 8888 # Server listens to port 8888
python3 manage.py runserver 0.0.0.0:8888 # Server listens to 0.0.0.0:8888
```

## django REST framework

### Project Setup

```bash
mkdir tutorial; cd tutorial

sudo apt-get install python3-venv
python3 -m venv env
source env/bin/activate

pip install django
pip install djangorestframework

django-admin startproject tutorial .
python manage.py startapp snippets
```

- Modify `tutorial/settings.py`

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'snippets.apps.SnippetsConfig',
]
```

### Creating models

- Create model snippet: `snippets/models.py`