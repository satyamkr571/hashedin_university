const initalState = {
  fname: "Satyam",
};
const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const profileReducer = (state = { initalState }, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        fname: "Kumar",
      };
    default:
      return state;
  }
};
