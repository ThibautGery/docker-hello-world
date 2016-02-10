Docker Hello world
==================

The purpose of the repository is to try the Docker and Docker-compose commands.

** This is a playground, nothing more **

Docker
------

The commands :
 * run `docker build --tag mynodeapp .` to build the application
 * run `docker images` to see all the images
 * run `docker network create myNetwork` to create the custom network
 * run `docker run --net=myNetwork --name ourRunningDb mongo` to start a new
 container
 * run `docker run --net=myNetwork -p 4000:3004 -e DB_HOST=ourRunningDb --name ourRunningApp mynodeapp` to start a new
 container
 * run `docker ps` to see all the running containers
 * run `docker rm -f ourRunningApp` to stop and delete the container
 * run `docker exec -it ourRunningApp bash` to start a bash session in the
 container
 * run `docker exec -it ourRunningApp ping -c 4 ourRunningDb` to start a bash session in the
 container
 


Docker-compose
--------------

 * run `docker-compose build` to build the container
 * run `docker-compose up` to start the containers
 * run `docker-compose ps` to see the running containers
 * run `docker-compose rm -f` to stop and delete the containers
