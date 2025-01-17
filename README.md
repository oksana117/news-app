Link to API documentation using Postman:

https://documenter.getpostman.com/view/20549406/2sAXxLAtPN

Setup Instructions:

Firstly, make sure MongoDB and Node.js are installed globally.
To verify MongoDB: mongod, to verify Node.js: node -v, nmp -v.

For the Server
Navigate to the server directory and run:

npm install cors express mongoose node-fetch nodemon request

For the Client
Navigate to the client directory and run:

npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome axios bootstrap font-awesome react react-bootstrap react-dom react-router-dom react-toastify

npm install --save-dev @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite

To start the application in the terminal:

server directory: npm start
client directory: npm run dev

The application architecture:

This app was developed using the MERN stack: MongoDB, Express.js, React, and Node.js. React handles the client side of the application,
creating dynamic and responsive UI. The backend is ran by Node.js and Express.js, by processing client request and handling news app logic.
MongoDB is used as database that stores collections in JSON like format. The data flows from React frontend sending an HTTP request to the
Express server. Then, the server processes the request and perform data manipulations (create,delete,update) with Mongoose, and sends back the response to the client side. For instance, when a user wants to save an article, the frontend sends an HTTP request to the backend API to insert the article data into the `ArticleModel` collection. Once the backend API successfully processes the request and returns a status 200, the article details are saved. The backend then sends a response back to the frontend, notifying the user that the article has been successfully added to their favourites table.

Special features:

One of the special features in this app is the real-time news articles updates API. For example, when a user searches for articles using any keywords, the frontend sends a request to the backend, which then fetches the latest articles from the Mediastack API. This process allows users to receive latest news articles. The use of `useEffect` in React ensures that as soon as the user starts typing a query, the application dynamically fetches and displays relevant articles.

Another feature that stands out in the application is the home page, where users can easily manage their favourite articles. Users have the option to view more details or remove articles directly from the displayed table. By clicking “View More,” a new page opens, showcasing the full details of the selected article. The API call fetches the user’s favourite articles from the backend when the component loads. It updates the state with the fetched data or logs an error if the request fails. If a user decides to remove an article from their favourites list, the application sends a request to the backend API to soft delete the article. This means the article is marked as removed but not permanently deleted, allowing us to keep a record of it. Implementing soft deletes is crucial for maintaining data integrity.
