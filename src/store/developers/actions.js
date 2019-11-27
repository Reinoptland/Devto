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

export const appLoading = () => {
  return {
    type: "APP_LOADING"
  };
};

export const appDoneLoading = () => {
  return {
    type: "APP_DONE_LOADING"
  };
};

export const fetchDevelopers = () => {
  return function thunk(dispatch, getState) {
    const developers = getState().developers;
    if (developers.length > 0) {
      return; // stop
    }

    dispatch(appLoading());
    // fetch data from api
    api("/developers").then(data => {
      console.log("WHERE IS MY DATA:", data.rows);
      const action = setDevelopers(data.rows);
      dispatch(action);
      dispatch(appDoneLoading());
    });
    // when we have data dispatch a SET_DEVELOPERS action
    // optional:
    // dispatch APP_LOADING
    // dispatch APP_DONE_LOADING
    // check the state if have developers already
  };
};
