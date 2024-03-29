# Procedures

1. Setting up react & redux
2. Using state from redux in your component

## Simple actions (objects)

3. Dispatching an action from your component
4. Handling action in your reducer

## Thunks (can be async)

5. Creating a thunk & dispatching a thunk
6. Handling action in our reducer

## Add Routing

7. Setup routing
8. Add navigation & define a static Route
9. Define a dynamic Route

## Signup

10. Signup page & Form
11. Post data to the api

## 1. Setting up

1. Install redux, react-redux, redux-thunk
2. Create a store
   - reducer
     - Set up a reducers folder strucutr
     - reducer should return an initial state
     - combine reducers
   - "enhancer"
     - devtools
     - thunk
3. Use the Provider component so the app has access to the store

### How to test?

- npm start
- check devtools
- see if you have an initial state

## 2. Using state from redux in your component

1. Create component
2. Use your component in the app
   - Check: your components
3. connect
   - Check: do we have dispatch as a prop
4. mapStateToProps
   - Write mapStateToProps function
   - pass it to connect (as the first argument)
   - Check: console.log props in the render
   - Check: props in component React devtools
5. Use this.props.something in your componen
   - Final check: change initial state, page should change

## 3. Dispatching action from component

1. Add component / button etc.
2. Event listener
3. Event handler
   - Check: console.log something in event handler
4. Action creator -> returns an action
5. Call action creator -> action
   - console.log your action, does it have type & payload
6. Dispatch action
   - Check devtools -> action dispatched?

## 4. Handle action reducer

1. Switch
2. Default case
   - Check: Redux Devtools for inital state
3. Return a new state for each case
4. Logic how to transform the state
   - Check if state has changed in Redux Devtools

# Thunks

What is thunk

- Function
- That returns a function

Redux Thunk

- An action that is a function

Redux Thunk - Y tho

- Make sequences of actions
- Possibility to check state before dispatching / fetching

## Setup (we already did in step 1)

- Apply middle ware, compose enhancer (check the docs)

## 5. Creating a Thunk & Dispatching it

1. Define an action creator (thunk) -> fetchDevelopers
   - It return a function
2. Define an action creator (simple) -> setDevelopers
   - It returns a simple action (object)
3. Import in your component
4. Call your thunk action creator to create an action
   - console.log the output (we expect a function)
5. Dispatch your action
   - Check: devtools, are your action(s) being dispatched?

## 6. Handling action in our reducer

1. Add a case for SET_DEVELOPERS
2. Logic
3. Check: Redux state -> is the state updated

## React Router

- Multiple pages
- Links (Link from react router) not <a>
- Router component
- Define a Route inside Router ->
  - a Route component renders a component when the path matches

## 7. Setup Routing

- npm install react-router react-router-dom
- Wrap our app in a Router component (inside index.js)
- Make at least 1 Route, Home

## 8. Add navigation

- Component that shows up an all pages (navbar)
- Add Links to it
- Links link to different path
- Define a Route for each path

## 9. Dynamic Routing

1. We need an id
2. We need Link that links to a dynamic path
3. We need the Route with a route parameter
4. We need a component for this new route
5. Use the Route parameter (id) to fetch the correct data (use router props)
   - id is found in this.props.match.params.id
   - componentDidMount
   - make a thunk ()
6. Dispatch action
   - connect to get access to dispatch
7. Store in Redux
8. Put data in component (mapStateToProps)
9. Display

## 10. Signup page & Form

1. New component
2. Route & Link
3. Form
   - Inputs
   - Submit button
   - handleChange / handleSubmit
   - Save state of the form in local state

Check: Do we have the data from the form

## 11. Post data to the api

1. Took the data from the form
2. Create thunk
3. Dispatch thunk
4. Check response from api
5. Dispatch action to update the state with data from the api
6. Handle action in reducer

## 12. Making an authenticated request (using our token)

1. Component
2. Route, Link
3. Form
   - submit
   - handlers, onchange
   - Don't show form if you're not signed in
     - connect, mapstateToProps, logic & Link
4. Create a thunk
   - Sends request to api
   - with the token and the content
5. Check response from api
6. Dispatch action to the redux store with our post
7. Handle action in reducer
8. Display our post

## Deploy

- Redirects file in public folder (not too important right now)
