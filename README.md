# React and Node.js Chat Application

This is a simple chat application built with Node.js and React.js, using ChatEngine.io for the chat functionality.

## Prerequisites

1. Node.js installed on your computer
2. A ChatEngine.io account

## Setup

### ChatEngine.io Setup

1. Go to https://chatengine.io and sign up for an account
2. Create a new project
3. Note down your Project ID and Private Key

### Backend Setup

1. Navigate to the backend folder

2. Install dependencies:
npm install express cors axios

3. Open the file `index.js` in a text editor.

3. Replace `"Enter your private key"` with your actual Chat Engine Project Private Key.

4. In the terminal, navigate to the project directory.

5. Run `npm run start` to start the backend server.

The server will start on port 3001



### Frontend Setup

1. Navigate to the frontend folder:

2. Install dependencies:
npm install react-chat-engine-advanced axios

3. Open the frontend file `src/ChatsPage.jsx` and replace `"Enter your project ID"` with your ChatEngine Project ID

4. Start the React application:
npm start

The application will start on http://localhost:3000

## Running the Application

1. Ensure both backend and frontend are running
2. Open a browser and go to the URL shown in your terminal (typically http://localhost:3000 or another port).
3. You'll see a welcome page asking for a username
4. Enter a username and click "Enter"
5. You'll be taken to the chat interface where you can start chatting

Note: Make sure both the backend server and frontend application are running simultaneously for the chat application to work properly.
