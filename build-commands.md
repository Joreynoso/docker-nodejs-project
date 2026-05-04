# Trabajo Práctico Docker - Node.js

## Hito 2: Empaquetado y Persistencia

### Dockerfile
Ver archivo `Dockerfile` en este repositorio.

### Comando de construcción
```bash
docker build -t mi-app-logs .
```

### Comando de ejecución con persistencia
```bash
docker run -d --name mi-app -p 3000:3000 -v ${PWD}/logs-host:/app/logs mi-app-logs
```

### Evidencia
Los logs se generan correctamente en `logs-host/access.log` y persisten aunque se elimine el contenedor.

## Hito 3: Docker Compose y Publicación en Docker Hub

### Levantar los servicios con Docker Compose
```bash
docker-compose up -d
```

### Publicar imagen en Docker Hub
Comandos utilizados para etiquetar y subir la imagen personalizada a Docker Hub:

```bash
docker login
docker tag docker-nodejs-project-app joreynoso/docker-nodejs-project-app:v1.0
docker push joreynoso/docker-nodejs-project-app:v1.0
```