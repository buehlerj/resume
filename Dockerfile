# Use the official Node.js image as the base image
FROM node:18.19.1 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli@18.2.3

# Copy the rest of the application code
COPY . .

# Build the Angular application in production mode
RUN npm run build-prod-deploy

# Use the official Nginx image as the base image for serving the application
FROM nginx:latest

# Copy the custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular application from the build stage to the Nginx HTML directory
COPY --from=build /app/dist/resume-landing/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80
