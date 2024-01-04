# Multistate Co-operative Societies Management Dashboard

This project is a comprehensive dashboard designed using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Bootstrap, aimed at facilitating the management of multistate co-operative societies.

## Features

- Interactive Visualizations: Utilizes various graphical representations (bar, line, pie charts) to showcase society data in an intuitive manner.
- Admin Dashboard: Provides administrative tools for real-time monitoring, allowing oversight of society metrics and operations.
- Feedback and News Display: Includes sections for feedback collection and displaying recent news, enhancing communication and updates.
- Real-time Society Monitoring: Offers live monitoring features for quick insights into society activities and performance.

## Technologies Used

- MongoDB: Database management system for storing society data.
- Express.js: Backend web application framework used to build the server-side of the application.
- React.js: Frontend JavaScript library for creating the user interface components.
- Node.js: JavaScript runtime environment for executing server-side code.
- Bootstrap: Frontend framework for responsive and sleek design implementation.

# Project Installation Guide

## Frontend (Client) Installation

### Step 1: Navigate to Client Folder

```bash
cd client
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment File

Create a file named `.env` in the `client` directory and add the following key:

```
REACT_BASE_URL=YOUR_BACKEND_URL
```

Replace `YOUR_BACKEND_URL` with the base URL where the backend server will be hosted.

### Step 4: Start the Application

```bash
npm start
```

## Backend (Server) Installation

### Step 1: Navigate to Server Folder

```bash
cd server
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment File

Create a file named `.env` in the `server` directory with the following keys:

```
DB_USERNAME=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_CLUSTERNAME=YOUR_DB_CLUSTERNAME
DB_NAME=mscs
```

Replace `YOUR_DB_USERNAME`, `YOUR_DB_PASSWORD`, and `YOUR_DB_CLUSTERNAME` with your MongoDB database credentials.

### Step 4: Create Database

Ensure you have MongoDB installed and create a database named `mscs`.

### Step 5: Start the Server

For production:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

## Usage

- Access the dashboard via the provided URL.
- Explore interactive visualizations for society data.
- Use the admin dashboard for real-time monitoring and management.
- Engage with the feedback section and stay updated with recent news.

## License

This project is licensed under the [MIT License] License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
