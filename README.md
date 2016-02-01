Docker Hello world
==================

The purpose of the repository is to try the Docker and Docker-compose commands.

** This is a playground, nothing more **

Docker
------

The commands :
 * run `docker build --tag myNodeApp .` to build the application
 * run `docker images` to see all the images
 * run `docker run -p 4000:3004 --name myAppRunning myNodeApp` to start a new
 container
 * run `docker ps` to see all the running containers
 * run `docker rm -f ourAppRunning` to stop and delete the container
 * run `docker exec -it ourAppRunning bash` to start a bash session in the
 container


Docker-compose
--------------

 * run `docker-compose build` to build the container
 * run `docker-compose up` to start the containers
 * run `docker-compose ps` to see the running containers
 * run `docker-compose rm -f` to stop and delete the containers
