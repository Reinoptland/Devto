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
