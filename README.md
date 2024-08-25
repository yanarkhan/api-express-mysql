# API Express MySQL

This repository contains a RESTful API built using Node.js, Express, and MySQL. The API is designed to perform basic CRUD (Create, Read, Update, Delete) operations on a MySQL database.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on the database.
- **Express Framework**: Uses Express for routing and middleware.
- **MySQL Database**: Interacts with a MySQL database for data storage and retrieval.
- **RESTful Architecture**: Follows REST principles for easy integration and scalability.
- **Environment Variables**: Secure and configurable environment variables for sensitive information (e.g., database credentials).

## Technologies Used

- **Node.js**
- **Express**
- **MySQL**
- **dotenv** (for environment variables)
- **nodemon** (for development)

## Installation

To get this project running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yanarkhan/api-express-mysql.git
   ```
2. Navigate to the project directory:
   ```bash
   cd api-express-mysql
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your MySQL database credentials:
   ```bash
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. The API will be running on `http://localhost:3000`.

## API Endpoints

Here are some of the basic endpoints available in this API:

- **GET /api/items** - Retrieve all items
- **GET /api/items/:id** - Retrieve a single item by ID
- **POST /api/items** - Create a new item
- **PUT /api/items/:id** - Update an existing item by ID
- **DELETE /api/items/:id** - Delete an item by ID

## Contribution

Feel free to fork this repository and submit a pull request if you'd like to contribute. Any suggestions for improvements or bug fixes are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
