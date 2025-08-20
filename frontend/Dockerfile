# Use Node image
FROM node:14-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend source code
COPY . .

# Expose React port
EXPOSE 3000

# Start React dev server
CMD ["npm", "start"]
