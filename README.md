# Would You Rather | React-Redux Project

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [App Structure](#Application_Structure)
- [Create React App Info](#Create_React_App_Info)

## Introduction

This is project is a single page web application developed using the React library and the Redux library for application state management, the app presents the logged in user with a list of poll questions, each of which they can answer, the user can also view a list of results for previously answered questions. Finally the user has the ability to add new poll questions of their own and view a leaderboard of users total of questions answered and asked.

## Instructions

### How to start the Would you Rather React-Redux single page application
- Application URL [Click here to launch Would You Rather App](https://would-you-rather-4028c9.netlify.app/)
- Application may be downloaded or cloned (git clone https://github.com/Marius-De-Allie/reactnd-Would-you-rather)from [my GitHub repository](https://github.com/Marius-De-Allie/reactnd-Would-you-rather)
- Once downloaded or cloned via git clone terminal command
- Run `npm install` via terminal, to download all dependencies for the application.
- Run `npm start` via terminal, to launch application's dev server. This will result in a new tab being opened in your default browser and you should be presented with the Would You Rather app Home page, requiesting that the user login to proceed.

### How to use Would you Rather React-Redux application.
#### App Home Page.
- On the application's Home Page (url: `http://localhost:3000/`) the user will be prompted to login to continue using the application.
- The user may login by selecting one of the 3 built in user accounts in the login dropdown located at the top right hand corner of the page.
- Once logged in the user will see a list of all the unanswered poll question items for that logged in user. 
- The user may click on the view poll button located next to each unanswered poll item to view the poll and then answer poll. If a new poll is completed by user, the results of that poll is then displayed.
- Poll results consist of the following data: 
    1. Both poll question options.
    2. Number of votes each poll option received.
    3. Percentage of total votes that poll option received.
    4. The poll option that was selected by the currently logged in user.
- At the top right of the homepage there will be a Click here to view answered questions button, upon clicking this link the user will be redirected to all questions already answered by the currently logged in user.
- The user can click on the view poll button next to each answered poll to view details of that poll.
- Answered poll results(details) consist of the following data:
    1. Both poll question options.
    2. Number of votes each poll option received.
    3. Percentage of total votes that poll option received.
    4. The poll option that was selected by the currently logged in user.
- The Application contains a navigation bar that is visible at the top of all the application's pages, the nav bar has links for the following:
    `Home Page`
    `Add Poll`
    `Leaderboard`
#### App Add Poll Page.
- The add poll page can be accessed in one of two ways:
    1. Directly typing in the add poll page url into your browser address bar, i.e. `http://localhost:3000/add`
    2. From the application's Homepage clicking on the Add Poll link in the nav bar at the top of the page to get redirected to the `http://localhost:3000/add` page. *If you access the add poll page by entering the page url into your browser
    you will be prompted to login first to continue, user must be logged in in-order add a new Poll.
- Once on the add poll page the user will be presented with a form for entering new poll data.
- User will need to enter the two new text options for the new poll, once both are entered the user can then submit the new poll by clicking on the submit button or hitting enter on keyboard.
- Once the new poll has been submitted, the user will be redirected to the application's homepage, unanswered questions list. On the homepage the user will see the newly created poll item listed at the top of the list of unaswered poll   questions.
- The user can then vote on this newly created poll by clicking on the view poll button for this new poll item.
#### App Leaderboard Page.
- The leaderboard page can be accessed in one of two ways:
    1. Directly typing in the leaderboard page url into your browser address bar, i.e. `http://localhost:3000/leaderboard`
    2. From the application's Homepage clicking on the Leaderboard link in the nav bar at the top of the page to get redirected to the `http://localhost:3000/leaderboard` page. *If you access the leaderboard page by entering the page url into your browser you will be prompted to login first to continue, user must be logged in in-order view the leaderboard.
- Once on the leaderboard page the user will be presented with a table displaying the all the app's users in descending order by total number of poll questions answered and asked per user.
#### App Poll details Page.
- Each poll's  details page can be accessed in one of two ways:
    1. Directly typing in the poll detail's page url into your browser address bar, the poll details url will have the following format: `http://localhost:3000/questions/question_id`, where question_id is the id of the poll question for which we want to access the details, example url: `http://localhost:3000/questions/xj352vofupe1dqz9emx13r`. * If you access the poll details page by enetering the url into your browser you will be prompted to login to continue to nthe poll details page. 
    *Also if the qwuestion id in the url entered for the poll does not match a question id of a question already in the backend database then you will be presented with page not found error, with an option to be redirected to the application's homepage.
    *For questions that you added to the app yourself you will not be able to access these poll detail's pages via the url because the new questions do not get added to the backend database.

## Application_Structure

- The application is build using the React library and application state is managed via Redux in conjunction with the react-redux library for connecting redux store state to the individual react components.
- App routing, linking, etc is all done through react-router-dom.

  ### Redux store  
  - The Redux store state object has the following structure:
    - a users state property that has a default value of an empty object. This piece of redux state holds the list of users who has access to use the application. This data is permanently stored in a backend database (_DATA.js file).
    - a questions state property that has a default value of an empty object.  This piece of redux state holds the list of poll questions. This data is permanently stored in a backend database (_DATA.js file).
    - an authedUser property that has a default value of null.  This piece of redux state holds the user id of teh currently logged in user.
  ### Reducers
  - the application consists of three action creator files:
    - a users.js action creator file that has all the action creators used to dispatch actions to the users reducer to update the users piece of redux store state.
    - a questions.js action creator file that has all the action creators used to dispatch actions to the questions reducer to update the questions piece of redux store state.
    - an authedUser.js action creator file that has one action creator which is used to dispatch an action to the authedUser reducer to update the authedUser piece of redux store state.
    - a shared.js action creator file that has all the thunk action creators used to dispatch actions to both the users and questions reducers to update both the users and questions pieces of redux store state.
  ### Action creators
  - the application consists of four reducer files:
    - a users.js reducer file that handles all of the dispatched users action and updates the users piece of redux store state as required.
    - a questions.js reducer file that handles all of the dispatched questions actions and updates the questions piece of redux store state as required.
    - an authedUser.js reducer file that handles all of the dispatched authedUser actions and updates he authedUser piece of redux store state as required.
    - an index.js main reducer file that combines all the other 3 reducers above into one reducer via the combineReducer function call, this files output is later exported to the index.js file for create the redux store.
  ### MiddleWare
  - the application consists of two middleware files:
    - a logger.js middleware file that logs to the console every action that is dispatched in the app and also the newly updated redux store state after each action has been dispatched.
    - an index.js middleware file that calls the applyMiddleware function, taking in the thunk middleware from the redux-thunk library as well as the logger middleware from above, this file exports the output from applyMiddleare function call, which is then passed into the createStore function call in index.js to create the redux store.
  ### React components
  - the application consists of a total of fourteen react component files:
    - App.js componet file - root component that renders all other application component's as well as handles lient side application routing via react-router.
    - Nav.js component file - renders the navigation bar portion of the application. This is a Container Component that has access to the authedUser and users portions of redux store state.
    - UserSelector.js component file - renders the user login dropdown and currently logged in user's avatar and name, this component is rendered within the Nav component above and is connected to the users piece of state from the redux store.
    - Homepage.js component file - renders the application's homepage UI, which consists of the UnansweredList component, AnsweredList component as well as the nav buttons to go back and forth between both list views.
    This is a container component that has access to the authedUser  peice of state from the redux store.
    - UnansweredList.js component file - renders the list of unanswered poll questions for the currently logged in user, this component is rendered within the Homepage component above. Component has access to all pieces of state from the redux store.
    - AnsweredList.js component file - renders the list of answered poll questions for the currently logged in user, this component is rendered within the Homepage component above. Component has access to all pieces of state from the redux store.
    - QuestionItem.js component file - renders the  individual poll question items in the unanswered and answered lists, this component is rendered within both the UnansweredList and AnsweredList components. Component has access to all pieces of state from the redux store as well as an id prop passed down from it's parent component(UnansweredList or AnsweredList).
    - PollDetails.js component file - renders the answered or unanswered poll details. Component has access to the users and authedUser pieces of state from the redux store as well as it's own match.params.question_id prop.
    - UnaPollItem.js component file - renders the poll details for unanswered polls for the currently logged in user, component is rendered within PollDetails component above. Component has access to all pieces of state from the redux store as well as it's own pollid prop passed down from it's parent PollDetails component.
    - AnsPollItem.js component file - renders the poll details for answered polls for the currently logged in user, component is rendered within PollDetails component above. Component has access to all pieces of state from the redux store as well as it's own pollid prop passed down from it's parent PollDetails component.
    - AddPoll.js component file - renders the Add poll page. Component has access to aauthedUser piece of state from the redux store.
    - Leaderboard.js component file - renders the leaderboard details. Component has access to the users and authedUser pieces of state from the redux store.
    - LeaderboardItem.js component file - renders each leaderboard item on the leaderboard page, this component is rendered within the Leaderboarde component above. Component has access to the users piece of state from the redux store, as well as it's own id prop passed down from it's parent, Leaderboard component.
    - NotfoundPage.js component file - renders the application's 404 not found page. 

## Create_React_App_Info
    
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

