const initalState = {
  isModalOpen: false,
  type: "",
  message: "",
};
const UPDATE_MODAL_STATUS = "UPDATE_MODAL_STATUS";
export const modalReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_MODAL_STATUS: {
      if (action.payload) {
        return {
          ...state,
          isModalOpen: !state.isModalOpen,
          type: action.payload.type,
          message: action.payload.message,
        };
      } else {
        return {
          ...state,
          isModalOpen: !state.isModalOpen,
        };
      }
    }

    default:
      return state;
  }
};
