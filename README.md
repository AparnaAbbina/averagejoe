# Joe's Average Joes

Welcome to `Joe's Average Joes` career chat bot! This AI chatbot is designed to help users with career guidance, job options, resume tips, and interview preparation. Start exploring your interests and uncover exciting opportunities today! For the Codefest Hackathon with `Powering Futures` as our stakeholder.

Deployed website - [Click here](https://averagejoe.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)

## Introduction

This project is a React-based web application that interacts with an AI API to provide career guidance. Users can ask questions and receive responses from the chatbot, which are displayed in a conversational format.

## Features

- **User Input**: Users can type their questions into an input field.
- **AI Responses**: The chatbot provides responses based on the user's input.
- **Memory**: The conversation history is stored and displayed.
- **Loading State**: A loading indicator is shown while the chatbot is processing the user's question.
- **Sanitization**: User input is sanitized to prevent XSS attacks.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AparnaAbbina/averagejoe
    cd averagejoe
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000`. You will see the chat interface where you can start interacting with the chatbot.

1. **Ask a Question**: Type your question into the input field and press "Submit".
2. **View Responses**: The chatbot's responses will appear in the conversation history.
3. **Scroll**: The conversation history will automatically scroll to the latest message.

## File Structure

- **public/**: Contains static assets and the main HTML file.
- **src/**: Contains the source code for the application.
  - **App.jsx**: Main component of the application.
  - **index.js**: Entry point of the application.
  - **lib/fetch.js**: Contains the function to interact with the AI API.
