# client/Dockerfile

# Step 1: Build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production stage (Nginx)
FROM nginx:stable-alpine
# Copy the build output from the first stage to Nginx's serving folder
COPY --from=build-stage /app/build /usr/share/nginx/html

# Optional: Copy a custom nginx config to handle React Router and Proxying
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]