Backend

Requisitos previos:
Como único requisito previo, se debe tener Poetry instalado. Para ello, podemos usar el siguiente comando:

$ pip install poetry

Trabajar con las dependencias:
Python 3.9
FastAPI 0.66.0
Uvicorn 0.14.0
Experta 1.9.4

Debemos tener la versión de Python 3.9 debido a que pueden surgir problemas con la dependencia de Poetry.

Instalación:
Para la instalación, debemos haber ingresado a la carpeta "app". Primero, ejecutar el siguiente comando que generará el archivo "poetry.lock" para garantizar que las dependencias instaladas sean consistentes con la última vez que se actualizaron explícitamente en el archivo "pyproject.toml":

$ poetry lock

Y, finalmente, el "poetry.lock" será leído, instalando todas las dependencias y cualquier dependencia transitiva, asegurando así que siempre se instalen versiones específicas y predecibles de las dependencias con el siguiente comando:

$ poetry install

Ejecución:
Utilizar el siguiente comando desde la carpeta donde se encuentra el archivo "app.py" para levantar el backend. Si se desea, acceder a "localhost:8000/docs" desde un navegador para visualizar la API:

$ poetry run python3 app.py

Front App

Dependencias

$ npm install

Ejecución

Debemos utilizar el siguiente comando y acceder a "localhost:3000/home" desde un navegador:

$ npm run dev