# 🚀 Employee Manager - Full Stack Application

A complete full-stack web application for managing employee records, built with React, Tailwind CSS for the frontend, and a powerful Spring Boot REST API with a PostgreSQL database on the backend.

![Employee Manager Screenshot](https://drive.google.com/drive/home)

## ✨ Live Demo

Check out the live version of the frontend deployed on Render:

**[https://employeeapp-frontend-3vm3.onrender.com/](https://employeeapp-frontend-3vm3.onrender.com/)**

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Setup & Installation](#-project-setup--installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
  - [Frontend Setup (React)](#frontend-setup-react)
- [API Endpoints](#-api-endpoints)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🌟 Features

This application provides complete CRUD (Create, Read, Update, Delete) functionality for managing employees.

-   **View All Employees:** A clean, card-based layout to display all employees in the database.
-   **Add New Employee:** A dedicated page with a form to add a new employee's details.
-   **Update Employee:** Modify the information of an existing employee.
-   **Delete Employee:** Remove an employee record from the database.
-   **Search by Name:** A real-time search bar to filter employees by their name.
-   **Responsive Design:** The UI is fully responsive and works seamlessly on desktop and mobile devices, thanks to Tailwind CSS.

---

## 🛠️ Technology Stack

This project is separated into two main parts: a frontend client and a backend server.

### Frontend
-   **[React.js](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making API requests.

### Backend & Database
-   **[Spring Boot](https://spring.io/projects/spring-boot)**: A framework for creating stand-alone, production-grade Spring-based applications.
-   **[Spring Data JPA](https://spring.io/projects/spring-data-jpa)**: Simplifies data access layers for relational databases.
-   **[PostgreSQL](https://www.postgresql.org/)**: A powerful, open-source object-relational database system.
-   **[Maven](https://maven.apache.org/)**: A build automation and dependency management tool.

---

## ⚙️ Project Setup & Installation

To run this project locally, you'll need to set up both the backend and frontend services.

### Prerequisites

Make sure you have the following installed on your system:
-   **Java Development Kit (JDK)**: Version 17 or later.
-   **Maven**: For building the backend and managing dependencies.
-   **Node.js & npm**: For running the React frontend.
-   **PostgreSQL**: The database for the application.

### Backend Setup (Spring Boot)

1.  **Configure the database:**
    -   Open your PostgreSQL client (e.g., `psql` or pgAdmin).
    -   Create a new database for the project.
        ```sql
        CREATE DATABASE employee_db;
        ```
    -   Navigate to `src/main/resources/application.properties`.
    -   Update the `spring.datasource` properties with your PostgreSQL credentials:
        ```properties
        spring.datasource.url=jdbc:postgresql://localhost:5432/employee_db
        spring.datasource.username=<your-postgres-username>
        spring.datasource.password=<your-postgres-password>
        spring.jpa.hibernate.ddl-auto=update
        spring.jpa.show-sql=true
        ```

3.  **Build and run the application:**
    ```bash
    mvn spring-boot:run
    ```
    The backend server will start on `http://localhost:8080`.

### Frontend Setup (React)

1.  **Navigate to the frontend directory:**
    ```bash
    cd <your-repository-folder>/frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure the API URL:**
    -   Create a `.env` file in the `frontend` directory.
    -   Add the following line to tell your React app where the backend is running:
        ```
        REACT_APP_API_BASE_URL=http://localhost:8080/api/v1
        ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    The React application will open and run on `http://localhost:3000`.

---

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints under the base path `/api/v1`.

| Method   | Endpoint                                     | Description                               |
|----------|----------------------------------------------|-------------------------------------------|
| `GET`    | `/api/employees`                             | Fetches all employees.                    |
| `GET`    | `/api/employees/{id}`                        | Fetches a single employee by their ID.    |
| `GET`    | `/api/employees/search?name={name}`          | Searches for employees by name.           |
| `POST`   | `/api/employees/create`                      | Creates a new employee.                   |
| `PUT`    | `/employees/{id}`                            | Updates an existing employee.             |
| `DELETE` | `/employees/{id}`                            | Deletes an employee by their ID.          |

---

## 🔧 Configuration

-   **Backend:** All database and server configurations are located in `backend/src/main/resources/application.properties`.
-   **Frontend:** The base URL for the backend API is configured in `frontend/.env` using the `REACT_APP_API_BASE_URL` variable.

---

## ☁️ Deployment

-   **Frontend:** The frontend is deployed on **Render**. The build process automatically runs `npm install` and `npm run build`. Render serves the static files generated in the `build` directory.
-   **Backend:** The Spring Boot application can also be deployed on **Render** (or any other cloud service like Heroku or AWS). When deploying, ensure you set the database environment variables in the Render service configuration to connect to your live PostgreSQL instance.



---

## 👨‍💻 Contact

Aviraj Singh - [singhaviraj6944@gmail.com](singhaviraj6944@gmail.com)

