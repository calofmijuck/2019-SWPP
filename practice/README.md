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
- Sync with database

```bash
python manage.py makemigrations snippets
python manage.py migrate
```

### Serializer class

- Create a serializer for models: `snippets/serializers.py`

  - Declare fields that will be contained when the model data is serialized

- Serialization and Deserialization

```bash
python manage.py shell
```

```python
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

snippet = Snippet(code='foo = "bar"\n') # Create some snippets
snippet.save()

snippet = Snippet(code='print("Hello, world!")\n')
snippet.save()

# Serialization

serializer = SnippetSerializer(snippet) # Serialize
serializer.data # Check data as python dict
content = JSONRenderer().render(serializer.data) # Convert to json
content # Jsonized content

# Deserialization
import io

stream = io.BytesIO(content)
data = JSONParser().parse(stream) # Parse the data into python native data type

serializer = SnippetSerializer(data=data) # Conver to model object
serializer.is_valid() # validation
serializer.validated_data # Then validated_data is accessible
serializer.save() # Save - is_valid() must be called beforehand

# Serialization of many objects

serializer = SnippetSerializer(Snippet.objects.all(), many=True) # get all objects
serializer.data
```

### ModelSerializers

- Serializer class replicates lot of information contained in the `Snippet` class
- Use `ModelSerializers` and set fields to serialize

```python
class SnippetSerializer(serializers.ModelSerializer):
    ...
    class Meta:
        model = Snippet
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']
```

- Fields can be inspected by printing its representation

```python
from snippets.serializers import SnippetSerializer
serializer = SnippetSerializer()
print(repr(serializer))
```

### django Views with Serializer

- Write `snippets/views.py`
- Write `snippets/urls.py`, `tutorial/urls.py`

- Now run the server to test the API

```bash
python manage.py runserver
```

- Go to (browser) or curl `localhost:8000/snippets` to get all snippets
- `localhost:8000/1` to get snippet with id 1

### Requests and Responses

- Modify `snippet/views.py` to use rest_framework `Response` class
  - Also rest_framework provides `status` for status codes
