
# User Management REST API

This is a simple application built to demonstrate REST API functionality using Express and Mongoose. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a users database.

## Features
- **Create** a new user.
- **Read** all users or a specific user by ID.
- **Update** an existing user's information.
- **Delete** a user from the database.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building the API.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **MongoDB**: NoSQL database used to store user data.

## Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** running locally or through a cloud service (e.g., MongoDB Atlas).

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/seifsheikhelarab/user-management-rest-api
```

### 2. Install dependencies:

Navigate to the project folder and install the necessary dependencies:

```bash
cd user-management-rest-api
npm install
```

### 3. Environment Variables

Make sure MongoDB is running locally, or if you're using a cloud-based MongoDB instance (e.g., MongoDB Atlas). To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`PORT`



### 4. Start the server:

Run the application:

```bash
npm start
```

By default, the server will run on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. **GET /users**

- **Description**: Retrieves a list of all users in the database.
- **Response**: A JSON array of all users.

```bash
GET /users
```

### 2. **GET /users/:id**

- **Description**: Retrieves a user by their unique ID.
- **Response**: A JSON object containing the user details.

```bash
GET /users/:id
```

Example:

```bash
GET /users/5f4e18e8d01f1a3b7cbe9e9f
```

### 3. **POST /users**

- **Description**: Creates a new user in the database.
- **Request Body**: A JSON object with the `name` and `course` fields.

```bash
POST /users
```

Example request body:

```json
{
  "name": "John Doe",
  "course": "Computer Science"
}
```

### 4. **PATCH /users/:id**

- **Description**: Updates an existing user's information by ID.
- **Request Body**: A JSON object with fields to update (`name` and/or `course`).

```bash
PATCH /users/:id
```

Example request body:

```json
{
  "name": "Jane Doe",
  "course": "Mathematics"
}
```

### 5. **DELETE /users/:id**

- **Description**: Deletes a user by their unique ID.
- **Response**: A JSON object confirming the deletion.

```bash
DELETE /users/:id
```

## Example Usage

### Create a new user:

```bash
POST /users
Content-Type: application/json

{
  "name": "Alice",
  "course": "Biology"
}
```

Response:

```json
{
  "_id": "61b4eaf35f4b6b7c939b0a7f",
  "name": "Alice",
  "course": "Biology"
}
```

### Get all users:

```bash
GET /users
```

Response:

```json
[
  {
    "_id": "61b4eaf35f4b6b7c939b0a7f",
    "name": "Alice",
    "course": "Biology"
  },
  {
    "_id": "61b4eb8a5f4b6b7c939b0a80",
    "name": "Bob",
    "course": "Chemistry"
  }
]
```

### Update a user:

```bash
PATCH /users/61b4eaf35f4b6b7c939b0a7f
Content-Type: application/json

{
  "course": "Physics"
}
```

Response:

```json
{
  "_id": "61b4eaf35f4b6b7c939b0a7f",
  "name": "Alice",
  "course": "Physics"
}
```

### Delete a user:

```bash
DELETE /users/61b4eaf35f4b6b7c939b0a7f
```

Response:

```json
{
  "message": "User deleted"
}
```

## Error Handling

The API provides appropriate error responses for the following scenarios:
- **User not found**: If the user with the provided ID does not exist, the API will return a 404 error.
- **Validation errors**: If the data provided in the request is invalid (e.g., missing required fields), the API will return a 400 error with a descriptive message.
- **Server errors**: If an error occurs on the server side (e.g., database issues), the API will return a 500 error.
