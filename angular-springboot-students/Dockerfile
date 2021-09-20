# The builder from node image
FROM node:alpine as builder

# Move our files into directory name "app"
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN npm install @angular/cli -g
RUN cd /app && npm install
COPY . /app

# Build with $env variable from outside
RUN cd /app && ng build --prod

# Build a small nginx image with static website
FROM nginx:alpine
COPY --from=builder /app/dist/angular-springboot-client /usr/share/nginx/html
COPY --from=builder /app/nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 8081
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
