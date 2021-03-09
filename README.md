# HTTP-Notifier

This is a pub-sub demo using microservices architecture, leveraging on Nest.js microservices library.

## Objective

To create a an ecosystem of services which are networked together through a transport layer other than HTTP. 

## How does it work 
Using a Pub-Sub approach, messages are published to topics and one or more services which are subscribed to the topics gets the message. For this demonstration Redis is used as a transport layer, but this can also be achieved with the use of MQTT, Grpc, Kafka, etc.

start the main server using 
```
npm run start:dev
```
Then run ```cd tracking-service/``` to be the the tracking service project, the run the same start command as above.

Do the same for the Update Service ```cd update-service/```

Once all three are running, you can now make requests from the main server to publish messages to topics either or both services are subscribed to.

## Technology used
- Nest.js (A Node.js framework)
- Redis as a transport layer

## Basic Architecture
- src
  - controller
  - service
  - module
  - main
- service1
  - src
    - controller
    - service
    - module
    - main
- service2
  - src
    - controller
    - service
    - module
    - main
