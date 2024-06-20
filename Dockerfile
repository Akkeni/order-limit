FROM node:20-alpine

EXPOSE 3000

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

ENV NODE_ENV=production

# Install dependencies including dev dependencies required for build
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Remove development dependencies after the build to reduce image size
RUN npm prune --omit=dev

# Remove CLI packages since we don't need them in production by default
RUN npm remove @shopify/app @shopify/cli

# Remove development SQLite database
RUN rm -f prisma/dev.sqlite

# Command to run the application
CMD ["npm", "run", "docker-start"]
