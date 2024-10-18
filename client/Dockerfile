#Build phase
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

#Run phase
FROM nginx
# Note that EXPOSE does not expose the port, it's just useful for other developers and for AWS to know on which port to expose our app
EXPOSE 3000
# We copy the default.conf file defined in the nginx folder of the client service to setup an nginx server specific to the frontend, while the default.conf file in the nginx service is only used for routing
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# L'image Nginx intègre déjà le lancement de Nginx