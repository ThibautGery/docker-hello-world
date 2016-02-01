FROM node

# add the directory
RUN mkdir -p /root/sources

# add the code of the project in the image
ADD ./ /root/sources

# change work directory
WORKDIR /root/sources

# get dependencies
RUN npm install

# expose the port where the application is running
EXPOSE 3004

# run the app
CMD npm start
