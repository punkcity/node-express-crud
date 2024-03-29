# Simple Node.js + Express + MongoDB server providing CRUD operations

This project is a simple Node.js application using Express.js and MongoDB to provide basic CRUD (Create, Read, Update, Delete) operations.

- V1.0.1 (3/16/2024): Added CORS support - using cors package, so UI from different URL can be served
- V1.0.1 (3/15/2024): Better/generic renaming of API to /persons. Also added support for 'birthdate' field for 'Person' record

### NOW READY - [React UI to consume this CRUD server!](https://github.com/punkcity/react-crud)

## Technologies Used

- Node.js: An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
- Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- MongoDB: A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

## Project Structure

- index.js => Start point of the project/server. Core configurations (including the port) and server launch happens here
- /src/ => Root folder for all source files
- /src/controllers/ => Business logic code goes here
- /src/models/ => Models representing data in DB (MongoDB) are represented here
- /src/routes/ => All the REST HTTP requests are handled here, getting appropriately routed
- /public/ => Direct URL accessible files (images, for eg)

## Project Flow

- The application starts by importing the necessary modules.
- An Express application is instantiated.
- A connection to MongoDB is established.
- Body-parser middleware is set up to handle URL encoded and JSON request bodies.
- Express is set up to serve static files from the 'public' directory.
- Routes are imported and added to the Express application.
- A simple GET route is set up at the root URL ("/") to send a welcome message.
- The Express application starts listening for HTTP requests on port 3000.

## ADDITIONAL STUFF - For Testing raw Node.js

- The code is under /src/zz_node_test/
- Code to read/write large files using buffers

### Includes A NON-Express Raw Node.js HTTP Server (running on port 3011) -

- Pure Node.js HTTP server is ==> /src/zz_node_test/rawserver.js
- It servers HTML files located in /src/zz_node_test/views/ properly matching the routes - returning a standard "Error/NotFound" page if unsupported route encountered
- Also has capability to do RE-routing!
