# Cashback Revendedor

**Cashback Revendedor** is a React application for the Boticário retailers to manage their purchases' cashbacks.\
To read more about the project features read the file "Desafio - Front.pdf" inside the project.

## Table Of Contents

- Prerequisites
- Architecture Pattern
- Interface
- Integration
- Testing
- Dependencies
- How to use the mocked APIs to be able to see the integration
- Available Scripts
  - "yarn start"
  - "yarn build"
  - "yarn test"
  - "yarn eject"
- Useful links

## Prerequisites

- NodeJs
- Yarn

## Architecture Pattern

The project was architectured to use the predictable state container **Redux** to separate the UI layer from the logical layer.\
Every module related to Redux was structured using the **Ducks pattern**.

## Interface

**Material-UI** framework and **styled components** library were used to be able to build, develop and style faster components.

## Integration

The application needs working APIs so the user can access all features.\
In order to do that, the application **json-server** was used to mock fake REST APIs.

## Testing

The testing framework **Jest** combined with the testing utility **Enzyme** were used to test the application.

## Dependencies

Use the following command inside the root folder to install the dependencies.

> yarn

## How to use the mocked APIs to be able to see the integration

Install the application **json-server** with the command

> npm install -g json-server

Run the following command inside the root folder

> json-server --watch db.json

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `yarn test`

Run application tests and generate a coverage report to the `coverage` folder.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Useful links

- [Enzyme](https://enzymejs.github.io/enzyme/index.html)
- [Jest](https://jestjs.io/)
- [json-server](https://github.com/typicode/json-server)
- [Material-UI](https://material-ui.com/)
- [Node](https://nodejs.org/en/)
- [React](https://https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [styled components](https://styled-components.com/)
- [Yarn](https://yarnpkg.com/)
