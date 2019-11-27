const initialState = [
  { id: 32, name: "Rein", rockstarDeveloper: false },
  { id: 1, name: "Wouter", rockstarDeveloper: false }
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "APPROVE_DEVELOPER":
      // we need a new array
      // we use map check if id matches -> update rockstarDeveloper to true

      return state.map(developer => {
        if (developer.id === action.payload) {
          // we need a new object
          // keep all of the previous data, change rockstarDeveloper
          return {
            ...developer,
            rockstarDeveloper: true
          };
        }

        return developer;
      });

    case "SET_DEVELOPERS":
      return [...action.payload];

    default:
      return state;
  }
}
