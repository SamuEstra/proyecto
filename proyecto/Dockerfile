FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2: Configuración del servidor web
FROM nginx:alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/www /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]