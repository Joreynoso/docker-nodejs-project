# Trabajo Práctico Final Evolutivo: Despliegue de una Aplicación Contenedorizada

## Descripción del Proyecto

Este repositorio contiene la resolución integral del trabajo práctico final, cuyo objetivo fue configurar un entorno de desarrollo basado en contenedores, empaquetar una aplicación y orquestar su despliegue.

A lo largo del proyecto se implementaron las siguientes soluciones:
1. **Desarrollo:** Se creó un script en Node.js capaz de generar y registrar eventos (fecha y hora) en un archivo de logs.
2. **Empaquetado:** Se diseñó un `Dockerfile` a medida para aislar la aplicación en una imagen inmutable, gestionando el entorno de trabajo y el punto de entrada.
3. **Persistencia de Datos:** Se implementaron volúmenes (bind mounts) para asegurar que los logs generados dentro del contenedor persistieran de manera segura en el sistema anfitrión local (carpeta `logs-host`).
4. **Orquestación:** Se utilizó `docker-compose.yml` para levantar la aplicación junto a un servidor web (Nginx), logrando exponer de manera automática los logs persistidos a través del puerto 8080 del host.
5. **Distribución:** La imagen resultante fue versionada, etiquetada y subida a un repositorio público en Docker Hub.

---

## Imagen en Docker Hub
La imagen resultante de este proyecto se encuentra empaquetada, etiquetada y publicada de manera pública en el registry de Docker Hub, lista para ser descargada y ejecutada en cualquier entorno compatible.

👉 **[Ver imagen en Docker Hub: joreynoso/docker-nodejs-project-app](https://hub.docker.com/r/joreynoso/docker-nodejs-project-app)**
