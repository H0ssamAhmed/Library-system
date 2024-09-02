# Library Management System

A simple Library Management System built with TypeScript and Object-Oriented Programming (OOP) principles. This application allows users to add, remove, and display books in a virtual library. The project showcases the use of TypeScript for type safety and class-based structures for better code organization.

## Live Demo

Check out the live demo of the project [here](https://h0ssamahmed.github.io/Library-system/).

## Features

- **Add Books**: Users can add new books by providing the title and author.
- **Remove Books**: Users can remove books from the library by clicking the "Remove" button next to each book.
- **Display Books**: All books added to the library are displayed on the main page.
- **Persistent Storage**: Books are stored in the browser's `localStorage`, so they persist even after the page is refreshed.

## Project Structure

The project is structured using TypeScript classes and interfaces to represent books and the library itself. Below is a brief overview of the main components:

- **Book Class**: Represents a book with properties for `id`, `name`, and `author`.
- **Library Class**: Manages the collection of books, including adding, removing, and displaying them. It also handles interactions with `localStorage` to persist data.
- **TypeScript**: The application is built using TypeScript, ensuring type safety and better code maintainability.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/H0ssamAhmed/Library-system.git
   ```
