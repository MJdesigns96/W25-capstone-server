# Ecommerce MERN Capstone Project - Server Side

## Description
This web project is intended for HTTP-5310 Winter semester's capstone project meant to use a MERN stack to create a ecommerce application.
This project is meant to emulate and recreate common elements found across the current Ecommerce landscape and explore the different features that are available to users.

This project is connected to MongoDB through Mongoose with Express and Node.js running in the background for its server.
The client components are run through React + Vite.

### Challenges
- Object vs array methods; using MongoDB as my primary database has raised some slight issues where JSON data is being retreived and needing to be adapted to use array and other methods.
- Images; originally the images were stored in Mongodb as base64, this was causing issues where the request bodies being sent server side were too big and performance was being effected. Alternative methods were explored.

### Future
- 
- Connect to a payment processing application and allow payments to go through
- If a payment has gone through, save the information in a orders table that can be accessed by Users and Admin

## Installation
To install the dependencies "npm i" should be run to install all node dependencies.
From the root directory "npm start" should be run to start the server environment.
From the "capstone-react" directory, "npm run dev" should be run in a separate terminal to start the client environment.

### Client side git logs
This project originally had 2 different git logs, client and server, these two were merged for deployment. The git logs can be found below

https://github.com/MJdesigns96/W25-Capstone-client/tree/main
