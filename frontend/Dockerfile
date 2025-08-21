# Use Node.js 20 (supports Vite 7+ and modern crypto APIs)
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose Vite default dev server port
EXPOSE 3000

# Run Vite dev server, accessible from outside container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
