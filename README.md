# MERN Stack Application

This project demonstrates how to handle POST requests in the backend using Node.js and Express.

## Introduction

This guide will help you understand how to handle POST requests in a backend built with Node.js and Express.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    https://github.com/KartikAKGEC89/Accredian-backend-task.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Setting Up the Server

1. Create a file named `index.js` in the root directory of your project.

2. Set up a basic Express server:
    ```javascript
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;
    app.use(express.json());

    // Starting the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    ```

## Handling POST Requests

To handle POST requests, follow these steps:

1. Define a POST route in your `server.js` file:
    ```javascript
    app.post('/users', (req, res) => {
        const { name, email, referrename} = req.body;
    if (!referrename || !name || !email) {
        return res.status(400).json({ msg: "Fill all the fields" });
    }
    try {
        await User.create({
            name: name,
            email: email,
            referrename: referrename,
            referedAt: new Date(),
            updatedAt: new Date()
        });
        res.json({ msg: "Registration Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Registration Failed" });
    }
    });
    ```

2. The above route listens for POST requests at the `/users` endpoint. When data is sent to this endpoint, it extracts the `name`, `email` and `referrename` fields from the request body and processes them.

## Running the Server

1. Start the server by running:
    ```bash
    node index.js
    ```

2. The server will be running on `http://localhost:8080`.

3. You can test the POST request using a tool like Postman or cURL:
    ```bash
    curl -X POST http://localhost:8080/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "referrename":"abhey"}'
    ```

