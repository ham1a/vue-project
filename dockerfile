# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source code
COPY . .

# Set environment variables (optional)
ENV NODE_ENV=production

# Expose the app port (adjust if your app uses a different one)
EXPOSE 3000

# Run the app (uses "npm start" from package.json)
CMD ["npm", "start"]


