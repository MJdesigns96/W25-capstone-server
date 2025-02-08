# Ecommerce MERN Capstone Project - Server Side

## Description
This web project is intended for HTTP-5310 Winter semester's capstone project meant to use a MERN stack to create a ecommerce application.
This project is meant to emulate and recreate common elements found across the current Ecommerce landscape and explore the different features that are available to users.

This project is connected to MongoDB through Mongoose with Express and Node.js running in the background for its server.
The client components are run through React + Vite.

### Challenges
One of the key challenges I've faced with this project is the saving and retreival of data through MongoDB. The data needing to be in JSON format has made it challenging to inplement methods throughout this website due to the constant conversion between objects, arrays, and storing the data into localstorage.

### Future
- Implement admin validation through the login window to direct the admin user to the admin dashboard if validated
- Connect to a payment processing application and allow payments to go through
- If a payment has gone through, save the information in a orders table that can be accessed by Users and Admin

## Installation
To install the dependencies "npm i" should be run to install all node dependencies.
Then "npm start" should start the server locally.

### Client side
https://github.com/MJdesigns96/W25-Capstone-client/tree/main

### Server
This server should be running in the background for the client methods and data to be retrieved.
