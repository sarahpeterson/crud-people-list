## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the app, clone this repo with `git clone https://github.com/sarahpeterson/crud-people-list`.

Then, navigate to the project directory `crud-people-list`, and run:

### `yarn install` or `npm install` to make sure you have the necessary libraries.

### When that is complete, run `yarn start` or `npm start`

This runs the app in the development mode.<br />
Your browser will probably open on its own. If it doesn't open
[http://localhost:3000](http://localhost:3000) to view the app.

This app was tested in Chrome and will look/work the best in that browser.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Project Details

### CSS

I follow the official React recommendation to not use CSS classes across components, but
instead I apply specific CSS to each module group. For example, the peopleTable component
and it's related PeopleData component share one CSS file inside that folder.

This also makes it easy to switch back to JS if needed. For example, in the common component
folder, the styles.js file contains normal styling, but it also imports props so that something
like the background color of the button can be changed depending the style of a particular page.

I also like to handle colors with variables throughout the app so that any adjustments can be quickly made.

### React

I have organized the app using functional components. I've kept all the main logic and it's handling
in the App component. That is where I update the array of people as changes are made. I then
pass the updates down to the other components where I handle displaying the new data.

This structure allows for scalability. If the app ever needed to handle data through the use of an
API, I could easily add an API call to the App component, replace the initial data in the hook
used in the App component, and the data will still be passed to the child components without
many changes especially to the UI.

### Tests

I've written tests using the react testing library to check for what is shown when the app is
in edit mode, when a new person has been added and when the full list of people should be shown.

I also find it helpful when building an app, to have some test data available. I've included that
in the PeopleData file. You can test the app with this array using the TEST variable declared
in the App component. Set the variable to true to see a pre-set list of people or to FALSE to see the
app work from a fresh start.
