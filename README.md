# Tarea HW-06

## Creacion de un contenedo de docker en base a una app de django

## Requisitos para poder correr el contenedor
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instrucciones para construir y correr el contenedor

## dentro del proyecto desde terminal ejecutar lo siguiente:

## 1. Crear la imagen de docker
### Docker-compose build

## 2. Correr el contenedor
### Docker-compose up -d

## 3. Ejecutar las migraciones
### Docker-compose exec web python manage.py migrate

## 4. Crear un usuario para ver la base de datos desde la intefaz de django
### Docker-compose exec web python manage.py createsuperuser

## 5. Abrir en el navegador la siguiente direccion 
### http://localhost:8000/admin/