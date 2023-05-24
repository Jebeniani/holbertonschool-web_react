# React Basic Application

This repository contains a basic JavaScript application developed using React. It serves as a starting point for building React applications and includes several essential features and tools commonly used in React development.

## Table of Contents

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Testing](#testing)
- [Debugging](#debugging)


## Getting Started

To get started with this React application, follow the steps below:

1. Create a new JavaScript project using create-react-app:

   ```bash
   npx create-react-app my-app
   ```

2. Navigate to the project directory:

    ```bash	
    cd 0x02-REACT_INTRO
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:

    ```bash	
    npm start
    ```
    This will launch the application in your default browser and automatically reload it whenever you make changes to the source code.
5. Begin developing your React application by modifying the src/App.js file or creating new components in the src/components directory.

## Dependencies

The project uses the following main dependencies:
- React: A JavaScript library for building user interfaces.
- create-react-app: A development tool for quickly setting up React projects with a predefined project structure and configuration.
- Enzyme: A JavaScript testing utility for React that allows you to test your components in isolation.
- Webpack: A module bundler used for packaging the JavaScript modules of your application.
- Webpack: A module bundler used for packaging the JavaScript modules of your application.

For a complete list of dependencies, refer to the `package.json` file.

## Usage
The application consists of a basic React component structure located in the `src` directory. The main entry point of the application is the `src/index.js` file, where the React components are rendered into the DOM.

You can modify the existing components or create new components in the `src/components` directory to build your React application. The project is set up to use JSX syntax, which allows you to write HTML-like code within JavaScript.

## Testing
The project utilizes Enzyme's Shadow rendering to facilitate testing of React components. The test files are located in the `src/tests` directory and can be run using the following command:
    ```bash
    npm test
    ```

Feel free to modify or add additional tests to suit your application's requirements.

## Debugging
The React Developer Tools browser extension provides a set of debugging tools specifically designed for React applications. You can install the extension for your preferred browser and use it to inspect React component hierarchies, view component state and props, and debug React applications more efficiently.