const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "CREATE_POST_SUCCESS":
      return [{ ...action.payload }, ...state];

    default:
      return state;
  }
}
