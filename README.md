# SyscoBackend

#This is a  SYSCOMATIC BACKEND and BLOG Management API

``
POSTMAN API DOCS:  
https://documenter.getpostman.com/view/23485239/2s935mtRTz
``

````
Docker Command:
````
> docker container -ls => for check the docker images

# For build docker image and port release
> docker container run -d -p 8080:8080 zahed75/sysco-backend:0.0.1.RELEASE
# For Push the docker img
> docker push zahed75/sysco-backend:0.0.1.RELEASE

#DOCKER IMG CREATE
#docker build -t syscobackend .
#run docker image with port
# docker run -it -p 9000:8080 syscobackend