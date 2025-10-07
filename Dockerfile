# Imagen base ligera
FROM python:3.13-slim

# Evita que Python guarde .pyc y activa logging sin buffer
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Establecer directorio de trabajo
WORKDIR /HW-06

# Copiar proyecto
COPY HW-06 /HW-06/

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*

# Instalar dependencias de Python
COPY HW-06/requirements.txt /HW-06/
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto para Django
EXPOSE 8000

# Comando por defecto
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
