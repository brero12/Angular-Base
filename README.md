# Angular-Base

Base project with implementation of clean code recommendations.

It has:
* SOLID principles applied.
* Unit tests
* Use of rest service
* Dockerfile for Docker imaging

Use web service: 
http://ec2-18-223-117-185.us-east-2.compute.amazonaws.co:8080/swagger-ui.html

To download image:
docker pull brero12/angularspringboot: v1

To execute:
docker run --rm -d -p 8081: 8081 --name angularspringboot brero12/angularspringboot: v1

To try (Behind zuul gateway app):
http://ec2-18-223-117-185.us-east-2.compute.amazonaws.com/
