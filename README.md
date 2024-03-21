# Location Tracker

## Overview
This repository contains the source code for a location tracker application. The application is designed to track the location of users in real-time using GPS data.

## Features
- Real-time location tracking: The application continuously tracks the user's location and updates it in real-time.
- User authentication: Users are required to authenticate themselves before using the application.
- Location history: The application stores the location history of users, allowing them to view their past locations.
- Geofencing: Users can set up geofences and receive notifications when entering or exiting predefined areas.

## Technologies Used
- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Tokens (JWT) for authentication
- Frontend:
  - React.js

## Getting Started
To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both the backend and frontend:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the necessary environment variables such as `PORT`, `MONGODB_URI`, `JWT_SECRET`, etc.
5. Start the backend server:
   ```
   cd backend
   npm start
   ```
6. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```
7. Access the application in your web browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.
