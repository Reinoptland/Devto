# Procedures

1. Setting up react & redux
2. Using state from redux in your component

## Simple actions (objects)

3. Dispatching an action from your component
4. Handling action in your reducer

## Thunks (can be async)

5. Creating a thunk
6. Dispatching a thunk
7. Handling action in our reducer

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
