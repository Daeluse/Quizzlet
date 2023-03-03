# Starting base image
FROM node

# Configured a working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

# Run the npm install command to install dependencies
RUN npm install

# Copy all the files from local directory over to working directory
COPY . .

# open the 8080 port 
EXPOSE 8080

# Command to run when then docker container starts
ENTRYPOINT [ "npm", "start" ]