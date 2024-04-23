# BoolFlix - Vue.js Movie and TV Show Search App

BoolFlix is a web-based application designed to search for movies and TV shows, utilizing The Movie Database (TMDb) API. The application allows users to search for films and TV series based on their titles, displaying relevant information in an intuitive interface.

## Getting Started

To use BoolFlix, follow these steps:

1. Sign up for a free account on [The Movie Database (TMDb)](https://www.themoviedb.org).
2. Request an API key from TMDb. Once generated, find your API key in your account settings under "API".
3. Clone this repository to your local machine.
4. Install dependencies by running the command `npm install`.

## Running the Application

After installing the dependencies, start the application by running the command `npm run dev` in the terminal. Access the application at `http://localhost:****` in your browser.

## Features

1. **Movie and TV Show Search**: Users can enter either full or partial movie/TV show names in the search bar. Upon clicking the search button, BoolFlix sends a request to the TMDb API to retrieve matching movie and TV show results based on the user's query.

2. **Result Display**: Search results are displayed as cards, with each card showing the following information for each movie or TV show found:

   - Title
   - Original Title
   - Language
   - Rating

3. **Poster Addition and Rating Transformation**: BoolFlix retrieves and displays movie/TV show posters for each result. Ratings, originally on a scale of 1 to 10, are transformed into integers ranging from 1 to 5, representing the number of filled stars.

4. **Additional Information on Hover**: Hovering over a card reveals additional information, including:

   - Synopsis (overview)

5. **Netflix-like Layout**: BoolFlix features a layout reminiscent of Netflix, with a header containing the logo and search bar. Search results are presented as cards with background images representing the movie/TV show posters. Additional information appears upon hovering over a card.

6. **Genre Filters**: Optional genre filters allow users to show or hide search results based on movie and TV show genres.

In summary, BoolFlix provides users with a simple and intuitive way to search for and view information about movies and TV shows, leveraging the vast array of data provided by The Movie Database API.
