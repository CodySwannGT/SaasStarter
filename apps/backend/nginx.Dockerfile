# syntax = docker/dockerfile:1

# Use the official Nginx image as a base
FROM nginx:latest

# Install envsubst for environment variable substitution
RUN apt-get update && apt-get install -y gettext-base && rm -rf /var/lib/apt/lists/*

# Copy the Nginx configuration template
COPY infrastructure/nginx/nginx.conf /etc/nginx/nginx.conf
COPY infrastructure/nginx/conf.d/default.conf.template /etc/nginx/conf.d/default.conf.template

# Expose port 8080
EXPOSE 8080

# Substitute environment variables in the configuration file and start Nginx
CMD ["/bin/bash", "-c", "envsubst '${BACKEND_ADDRESS}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
