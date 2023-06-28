# URL Shrinker

URL Shrinker is a web application that allows users to shorten URLs and search for existing shortened URLs based on full URLs, short URLs, or notes. This application utilizes the Express.js framework, MongoDB for data storage, and EJS as the templating engine.

## Prerequisites

To run this project, ensure that you have the following dependencies installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:


2. Navigate to the project directory:


3. Install dependencies:


4. Set up MongoDB:

   - Make sure MongoDB is installed and running on your local machine or update the MongoDB connection string in the `mongoose.connect()` function in `server.js` file to point to your MongoDB instance.

## Usage

1. Start the application:


2. Open a web browser and navigate to `http://localhost:5000`.

3. URL Shortening:
   - Enter the URL you want to shorten in the "Enter the URL to be shortened" section.
   - Optionally, you can add a note associated with the URL.
   - Click the "Shrink" button to generate a short URL.

4. URL Searching:
   - Enter a search query in the "Enter the URL to be searched" section.
   - Click the "Search" button to search for existing shortened URLs based on the query.
   - The results will be displayed in a table, showing the full URL, short URL, and associated note (if available).

## Directory Structure

The project directory structure is as follows:


- `models/`: Contains the `shortUrl.js` file defining the Mongoose schema for the ShortUrl model.
- `views/`: Contains the `index.ejs` file, which represents the main view template rendered by the Express server.
- `package.json`: Contains project metadata and lists the project's dependencies.
- `server.js`: The main server file that sets up the Express server, defines routes, and establishes the MongoDB connection.