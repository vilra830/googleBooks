# Google Books

It is a single page application that allows users to search for books using the Google API. The search bar will accept any keywords may they be a title, an author or genre. Google Books will then fetch data using the Google API and render 10 books accordingly. Book cover images are clickable. Once a user clicks it, a modal opens containing more information about the book including authors, language, description, published date etc.

## Demo & Snippets

- Include hosted link
- Include images of app if CLI or Client App

---

## Requirements / Purpose

- Google Books will allow users to search for books using the Google API and display the search results.

---

## Build Steps

1. Clone project using the command: git clone git@github.com:vilra830/googleBooks.git
2. In git bash, cd into the project and type in npm install
3. Type npm run dev to run the app
4. Click on the link http://localhost:5173/ or copy and paste it in the browser

---

## Design Goals / Approach

Google Books is composed of 4 components, 1 container and a service and the parent app. It starts with a user interaction in the form component where a user keys in a search term. This term is stored in a state is passed into the parent component, App.jsx. The parent then passes the data to BookDetails. This data is then queried using the service googleBooks.js where it fetches filtered data using the search term. The service either returns an error or the data. While waiting, BookDetails renders the Loading component to update user the app is still searching. If there is an error, the error message will be rendered, otherwise, BookCard is. Each bookCard component has a clickable cover image where if clicked, a modal is open to show more details about each book.

---

## Features

1. Search Bar : Users can input keywords like book title, author
2. API Integration : Google Books will fetch data from the Google Books API based on the user's query.
3. Display Book Results : The application will display 10 book titles , authors, cover images and categories as search results.
4. Modal Display : Users can click on Cover images. A modal is then displayed with more information about the book fetch from the same API.
5. User Interface: A simply styled user interface with a header called Google Books, A search bar and a button and a lists of book results displayed in a grid.

---

## Tech Stack

- React
- Javascript
- SCSS
- git
- Vite
- NPM

## Known issues

- The app is unable to throw an error when an empty string is keyed in. It throws an error an error when a space is keyed in though.

---

## Future Goals

- A diagram will be added to show how the components interact with each other.
- More styling should be done to improve the appearance, responsiveness of the elements.

---

## What did you struggle with?

- Handling the no input error.
- Styling.
