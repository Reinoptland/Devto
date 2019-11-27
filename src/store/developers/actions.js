import api from "../../api";

export const approveDeveloper = id => {
  return {
    type: "APPROVE_DEVELOPER",
    payload: id
  };
};

export const setDevelopers = developers => {
  return {
    type: "SET_DEVELOPERS",
    payload: developers
  };
};

export const fetchDevelopers = () => {
  return function thunk(dispatch, getState) {
    // fetch data from api
    api("/developers").then(data => {
      console.log("WHERE IS MY DATA:", data.rows);
      const action = setDevelopers(data.rows);
      dispatch(action);
    });
    // when we have data dispatch a SET_DEVELOPERS action
    // optional:
    // dispatch APP_LOADING
    // dispatch APP_DONE_LOADING
    // check the state if have developers already
  };
};
