This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents
- [Project organization](#project-organization)
- [Running locally](#running-the-project-locally)
- [Deployment](#deployment)

## Project organization

Rather than grouping files by type, we'll **group by feature**. So everything for the "About" section will live in the same folder (HTML, CSS, images, etc.) and all the sections appearing on the Home screen will be in the same home folder.

For more info, this [Medium article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) is a good read.

## Running the project locally

> Local = just on your computer

Always test changes locally before pushing them to the actual website! Use the following commands to do so:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint (code style) errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

# Deployment

Whenever code is pushed to the **master** branch, Travis CI (CI = continuous integration) will automatically deploy the project using Heroku.

Since we don't have a domain name yet, you can see it live at https://dukeapolandingpage.herokuapp.com/
