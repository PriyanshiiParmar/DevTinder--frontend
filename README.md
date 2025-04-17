# Deployment
- create instance
- edit/update the key-value pair
- update the settings via ---- chmod 400 "devTinder-secrett.pem"
- connect to system via ---- ec2-16-171-162-203.eu-north-1.compute.amazonaws.com
- ssh -i "C:\Users\priya\Downloads\devTinder-secrett.pem" ubuntu@ec2-16-171-162-203.eu-north-1.compute.amazonaws.com
- ssh -i "C:\Users\priya\Downloads\node-secretKey.pem" ubuntu@ec2-13-60-216-39.eu-north-1.compute.amazonaws.com (this is used for latest)
- install correct version of node 
- clone the frontend and backend project onto the machine by - git clone https://github.com/PriyanshiiParmar/DevTinder--frontend.git
- for backend - git clone https://github.com/PriyanshiiParmar/DevTinder---backend.git


# Deploying frontend
- first we will deploy frontend
- move inside frontend folder
- make the build using npm run build
- first do "npm install" on th virtual machine to install all the dependencies
- do "npm run build" on virtual machine 
- on using ls afterwards, we will be able to see dist folder inside
- we will be using "nginx" for hosting frontend 
- do "sudo apt update"
- "sudo apt install nginx" - to install nginx
- " sudo systemctl start nginx" - to start nginx 
- " sudo systemctl enable nginx" to enable nginx
- copy code from dist folder to nginx - from dist to /var/www/html/
- "sudo scp -r dist/* /var/www/html" to copy all the files from dist folder to /var/www/html


# Deploying Backend
- first go to the backend folder, install all the dependencies via npm install
- "npm run start or npm start" - to start the project 
- "npm install pm2 -g" - install pm2 to keep application online 24/7
- "pm2 start npm -- start" - start application via pm2 using 
- "pm2 start npm --name "devTinder-backend" -- start"  - it will provide a custom name 

- nginx config

    sudo nano /etc/nginx/sites-available/default

     server_name 16.171.162.203;

     location /api/ {
        proxy_pass http://localhost:7777/;   # Proxy to Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    restart nginx - sudo systemctl restart nginx

- modify the base url to '/api