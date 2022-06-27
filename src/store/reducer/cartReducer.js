const initalState = {
  listOfCourse: [
    {
      id: "10",
      courseImg: "",
      courseTitle:
        "Responsive Design Course XYZ How to design responsive templates",
      topic: "React",
      author: "Joseph Marie",
      favourite: false,
      finalPrice: 463,
      mrp: 563,
    },
  ],
};
const UPDATE_CART_LIST = "UPDATE_CART_LIST";
export const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_CART_LIST: {
      let cartUpdatedItems = [];
      if (
        state.listOfCourse.filter((data) => data.id === action.payload.id)
          .length > 0
      ) {
        cartUpdatedItems = state.listOfCourse.filter(
          (data) => data.id !== action.payload.id
        );
      } else {
        cartUpdatedItems = [...state.listOfCourse, action.payload];
      }
      return {
        listOfCourse: cartUpdatedItems,
      };
    }

    default:
      return state;
  }
};
