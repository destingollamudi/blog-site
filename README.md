# Blog Site

## Overview

This project is a simple blog site that allows users to create, read, update, and delete blog posts. It includes a backend built with Node.js, Express, and MongoDB.

## Getting Started

To run the backend server for this blog site with `npm run dev`, follow these steps:

### Step 1: Fork the Repository

1. Go to the repository on GitHub.
2. Click the "Fork" button at the top right to create your own copy of the repository.

### Step 2: Clone the Forked Repository

Clone your forked repository to your local machine:

```
git clone https://github.com/yourusername/your-forked-repo.git
```

Replace `yourusername` and `your-forked-repo` with your GitHub username and the name of your forked repository.

### Step 3: Navigate to the Project Directory

Change into the project directory:

```
cd blog-site
```

### Step 4: Install Dependencies

Make sure you are in the `backend` folder, then install the required packages:

```
cd backend
npm install
```

### Step 5: Set Up MongoDB

To securely connect to your MongoDB database:

1. **Create a MongoDB Database**: Set up a MongoDB database, either locally or using a service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. **Use Environment Variables**: Store your MongoDB connection string in an `.env` file in the root of your `backend` project folder:

   ```
   MONGODB_URI=mongodb://username:password@host:port/database
   ```

3. **Update Your Code**: Use the `dotenv` package to load the environment variable in your `index.js`:

   ```javascript
   require('dotenv').config();
   mongoose.connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });
   ```

4. **Set Up Authentication**: Create a database user with a strong password and grant the necessary permissions.
5. **Enable IP Whitelisting**: Restrict access to your database by allowing connections only from specific IP addresses.

### Step 6: Run the Development Server

Now that everything is set up, you can run the server in development mode using:

```
npm run dev
```

This command will start the server using `nodemon`, which automatically restarts the server whenever you make changes to the code.

### Step 7: Access the API

Once the server is running, you can access the API at `http://localhost:3000/api/products`.

## Conclusion

You are now set up to run the backend server for the blog site. By following these security practices, you can help protect your MongoDB database from unauthorized access. You can start making requests to the API and further develop the application!

## Additional Resources

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Nodemon](https://nodemon.io/)
