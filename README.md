# MERN-todo-app

![image](https://github.com/krisgoswami/MERN-todo-app/assets/91143716/d3bc8e8c-4ae6-44a2-bd39-f61c0e54f6d8)


## Prerequisites
Before you can run the application, ensure that Node.js is installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Installation
Open three separate consoles and navigate to the respective directories, better to open with a code editor like VS Code.

1. **Client:**
    ```bash
    cd Client
    npm install
    ```

2. **Server:**
    ```bash
    cd server
    npm install
    ```

## Setting Up the .env File
Before running the application, you need to create a .env file inside the ‘server’ folder. This file is required to connect to the database.

Follow these steps to create the .env file using VS Code:

Right-click on the server folder.

Click on "New File..."

Name the file .env.

Open the .env file and add the following variables:
```bash
PORT = 8080
MONGO_URI = mongodb+srv://user:password@cluster0.audqii9.mongodb.net/todo (add your mongo uri)
```
Note: Make sure the .env is located in the root of the “server” folder, otherwise the server won’t start properly.


## Running the application: 
After setting up the env file, run the following commands:

1. **Client:**
    ```bash
    cd Client
    npm run dev
    ```

2. **Server:**
    ```bash
    cd server
    npm run start
    ```

Correctly following these steps, you will be able to run the application.
