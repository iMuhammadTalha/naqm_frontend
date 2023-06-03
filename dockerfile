# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the production-ready optimized version of the app
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3001

# Define the command to run the application
CMD ["npm", "start"]
