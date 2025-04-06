FROM node:18

# Set working directory
WORKDIR /app
# Copy package.json from src directory to root of container
COPY src/package*.json ./

RUN npm install

# Copy all files from src directory to app directory in container
COPY src/ .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]