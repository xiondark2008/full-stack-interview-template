# Full-Stack Developer Coding Challenge

## Overview
This coding challenge is designed to assess your skills in building full-stack applications using Angular, NestJS, and MongoDB. You will create a web application that displays data about Star Wars films, fetched from an external API.

## Project Structure
- **Frontend:** Angular application.
- **Backend:** NestJS application.
- **Database:** MongoDB (configured via Docker).

## Task Description
Your task is to build a Single Page Application (SPA) that displays a list of Star Wars films. The frontend should make a call to your NestJS backend, which in turn will fetch data from an external Star Wars API. You can choose between two different API implementations:

1. **REST API Implementation:** Use the [SWAPI - The Star Wars API](https://swapi.dev/).
2. **GraphQL Implementation:** Use the [Star Wars API on Apollo Studio](https://studio.apollographql.com/public/star-wars-swapi/variant/current/home).

Based on your preference and comfort level with either REST or GraphQL, select the appropriate API to integrate with.

### Frontend (Angular)
- Create an interface with a button to fetch Star Wars films.
- Display the fetched film data in a table format.

### Backend (NestJS)
- Implement an endpoint to handle the frontend request.
- Fetch film data from the chosen Star Wars API (REST or GraphQL).
- Manipulate and return the data to the frontend.

## Requirements
- **Functionality:** The application should work as expected, fetching and displaying Star Wars films.
- **Code Quality:** Your code should be clean, well-organized, and commented where necessary.
- **Error Handling:** Implement appropriate error handling in both frontend and backend.
- **Documentation:** Your code should be well-documented, and include instructions for setting up and running the application.

## Bonus (Optional)
- Implement additional features like caching, filtering, or sorting.
- Enhance the UI/UX with a UI framework or custom styles.
- Write tests for key parts of your application.

## Setup and Running the Application
- Instructions on setting up and running the Angular and NestJS applications.
  - To start backend, call `nest start --watch`
  - To start frontend, call `ng serve`

## Submission
- Push your code to a GitHub repository and provide the link for review.
- Ensure your repository includes a README with setup instructions and any other necessary documentation.

## Evaluation
Your submission will be evaluated based on functionality, code quality, adherence to best practices, and documentation. The use of either the REST or GraphQL API will not impact the evaluation, as long as the chosen API is implemented effectively.
