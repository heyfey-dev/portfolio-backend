Technologies Used
Node.js: A JavaScript runtime for building scalable server-side applications.
Express: A minimalist web framework for creating robust APIs.
MongoDB: A NoSQL database used to store and retrieve submission data.
Socket.IO: Enables real-time, bidirectional communication between clients and servers.

Steps to Set Up the Backend:
    install Dependencies: Navigate into the backend directory and install the required packages: YARN istall 
  
  Set Up Environment Variables: Create a .env file in the backend folder and configure the following:
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/your-database-name
    
Run the Server: Start the backend server with the following command:
yarn start


API Endpoints:

GET /api/submissions: Retrieve all submissions.
POST /api/submissions: Add a new submission.
PUT /api/submissions/:id: Update an existing submission by ID.
DELETE /api/submissions/:id: Delete a submission by ID.

