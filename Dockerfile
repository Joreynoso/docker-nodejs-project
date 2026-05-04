# Imagen base de Node.js (versión Alpine es más ligera)
FROM node:18-alpine

# Definir el directorio de trabajo
WORKDIR /app

# Crear directorios necesarios
RUN mkdir -p /app/config /app/logs

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (solo producción)
RUN npm install --production

# Copiar el código de la aplicación
COPY app.js .

# Exponer el puerto 3000
EXPOSE 3000

# Comando que se ejecutará al iniciar el contenedor
CMD ["npm", "start"]