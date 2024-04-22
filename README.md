# Meals Application

## Setup Instructions

### Create A New Project in REPLIT

1. Login or register to REPLIT.
2. In the dashboard, click on "create".
3. Find the React template and click "run".
4. Change the title in index.html to your desired title.

### Get Assets

1. Copy the styles from `/src/App.css`.
2. Copy the README.md.

### Global Styles Info

Add global styles from `App.css` to ensure consistency across components.

### Setup Structure

1. Create the `/src/components` directory.
2. Inside `/src/components`, create the following files:
   - `Favorites.jsx`
   - `Meals.jsx`
   - `Modal.jsx`
   - `Search.jsx`
3. Implement each component using arrow functions or the "shake and bake" method.
4. Export each component as default.

```jsx
// Example structure for importing components in App.js
import './App.css';

import Search from './components/Search';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Favorites from './components/Favorites';

export default function App() {
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </main>
  );
}
App Level State
Implement state management using Context API or a third-party state management library like Redux or Redux Toolkit.

Context API
Create a context.jsx file in the root directory.
Implement the Context API using React.createContext().
Create a provider component (AppProvider) and wrap it around the application.
Provide necessary state variables and functions through the context.
Consume Data
Consume data fetched from APIs in components using Context or custom hooks.

Custom Hook
Create custom hooks to consume context values easily across components.
Data Fetching
Fetch data from APIs using Fetch API or Axios.

Fetch API
Use Fetch API or Axios to fetch data from APIs.
Handle data fetching inside useEffect hook.
Meals Database Integration
Integrate a meals database API like Meals DB and fetch data accordingly.

Search Component
Create a search component to allow users to search for meals by name.

Handle Change and Handle Submit
Implement state management for search input.
Create functions to handle changes and form submissions.
Use useState hook to manage search input state.
Modal
Create a modal component to display detailed information about a selected meal.

Setup
Create a modal component with necessary structure.
Display modal content when a meal is selected.
Favorites
Implement functionality to add and remove meals from favorites.

Setup
Create a favorites component to display favorite meals.
Implement functionality to add and remove meals from favorites.
Local Storage
Implement local storage functionality to persist favorite meals across sessions.

Use local storage to store and retrieve favorite meals.
Update state and local storage when adding or removing favorites.
Dependencies
Axios (for data fetching)
React Icons (for icons)

This README provides step-by-step instructions for setting up the Meals Application, including creating the project, structuring components, managing state, fetching data, integrating with a meals database, implementing search functionality, creating a modal, managing favorites, and persisting data with local storage. It also lists dependencies required for the application.
