# Use a lightweight Node image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend source code
COPY . .

# Expose port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
