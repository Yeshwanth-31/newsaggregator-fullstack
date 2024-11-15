# News Aggregator

A full-stack web application that aggregates and displays news based on user-selected preferences. The application allows users to register, log in, select news preferences, and view personalized news. Clicking on a news item redirects users to the original news source.

## Features

- **User Authentication**: Secure login and registration system.
- **User Preferences**: Users can select their preferred news categories.
- **Dynamic News Feed**: News displayed based on user preferences.
- **Redirect to Source**: Clicking a news item redirects to the original article.
- **API Integration**: Fetches news using the News API.
- **Database Management**: Uses MongoDB for storing user data and preferences.

## File Structure

### Backend
- **controllers/**: Contains logic for handling requests.
- **middleware/**: Middleware for authentication and other utilities.
- **models/**: MongoDB models for user and preferences data.
- **routes/**: Routes for API endpoints.
- **.env**: Contains environment variables (e.g., database URI, API keys).
- **server.js**: Entry point for the backend server.

### Frontend
- **index.html**: Home page displaying personalized news.
- **login.html, login.css, login.js**: User login functionality.
- **register.html, register.js**: User registration functionality.
- **preferences.html, preferences.js**: Page for selecting news preferences.
- **script.js**: Main JavaScript logic for fetching and displaying news.
- **style.css**: Styling for the entire application.

## Workflow

1. **Login Page**:
   - Users log in using their email and password.
   - New users can register their details.

2. **Preferences Page**:
   - Users select their preferred news categories using checkboxes.
   - Upon submission, preferences are saved and the user is redirected to the home page.

3. **Home Page**:
   - Displays news categories based on the user’s preferences.
   - Users can click on a news item to view the full article on the original source.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: News API

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- News API key (get it from [News API](https://newsapi.org/))


