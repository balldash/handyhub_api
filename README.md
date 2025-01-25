# HandyHub API

**Find the Right Tradesman, Every Time**

HandyHub is a robust backend API service that connects clients with reliable tradesmen, providing a seamless way to find, manage, and hire skilled professionals for various tasks.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Challenges & Lessons Learned](#challenges--lessons-learned)
- [Next Steps](#next-steps)

---

## Features

- **Authentication**: Securely authenticate tradesmen and clients using JWT.
- **Tradesmen Management**: CRUD operations for tradesmen.
- **Client Management**: CRUD operations for clients.
- **Job and Offer Management**: Enable job postings, offers, and hiring processes.
- **Error Handling**: Comprehensive error responses for invalid input or unauthorized access.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: DigitalOcean App Platform
- **Testing**: Jest, Supertest

---

## Getting Started

### Prerequisites

- Node.js (v22.12.0 or later)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/balldash/handyhub-api.git
   ```
2. Navigate to the project directory
    ```bash
    cd handyhub-api
    ```
3. Install dependencies
    ```bash
    npm install
    ```

### Running the Server

1. Start the development server:
    ```bash
    npm start
    ```
2. The server runs on `http://localhost:3000` by default.

---

## Environmental Variables
Create a `.env` file in the root directory and include the following:
```env
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

---

## API Documentation

### Authentication
- Signup: `POST /api/auth/signup`
- Login: `POST /api/auth/login`

## Tradesman
- Create Tradesman: `POST /api/tradesmen`
- Get All Tradesmen: `GET /api/tradesmen`
- Get Tradesman by ID: `GET /api/tradesmen/:id`
- Update Tradesman: `PUT /api/tradesmen/:id`
- Delete Tradesman: `DELETE /api/tradesmen/:id`

## Clients
- Create Client: `POST /api/clients`
- Get All Clients: `GET /api/clients`
- Get Client by ID: `GET /api/clients/:id`
- Update Client: `PUT /api/clients/:id`
- Delete Client: `DELETE /api/clients/:id`
*For detailed examples of requests and response payloads, refer to the Postman collection in the repository.*

---

## Testing
Run all tests with:
```bash
npm test
```
- **Test Coverage:** Achieved 100% coverage for models and services.

---

## Challenges & Lessons Learned
- Challenges
    - Debugging model associations.
    - Setting up the database on DigitalOcean.
- Lessons Learned:
    - The importance of proper database design.
    - Strageties for debugging Sequelize and hosting issues.
 ---

 ## Next Steps
 - Add advanced search and filtering for tradesmen.
 - Implement sorting options for tradesmen and jobs.
 - Develop a frontend for a complete user experience.

 ---
 
 ## Contributing
 Contributions are welcome! Feel free to fork the repository and submit a pull request.
