# Dockerfile
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./

# Install dependencies with npm but disable Sentry scripts
ENV SENTRY_DISABLE_INSTALL_SCRIPT=1
ENV SENTRY_NO_SUPPORT_SCRIPT=1
RUN npm install --legacy-peer-deps --ignore-scripts

# Copy app source
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 4000

# Start the server
CMD ["npm", "run", "dev"]
