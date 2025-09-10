FROM nginx:stable-alpine

# Copia los archivos construidos desde la etapa anterior
COPY ./dist /usr/share/nginx/html

# Copia configuración personalizada de nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf
# Expone el puerto 80
EXPOSE 80

# Comando por defect
CMD ["nginx", "-g", "daemon off;"]
