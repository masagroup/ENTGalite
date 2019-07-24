#############
### build ###
#############

# base image
FROM node:12.2.0 as build


# install and cache app dependencies
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --no-progress --ignore-optional
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

# generate build
RUN npm run-script build

############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /front

COPY ./proxy/nginx.conf /etc/nginx/conf.d/default.conf
# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
