const initalState = {
  listOfCourse: [
    {
      id: "2",
      courseImg: "",
      courseTitle: " How to design responsive templates",
      topic: "React",
      author: "Joseph Marie",
      favourite: true,
      finalPrice: 463,
      mrp: 563,
    },
    {
      id: "8",
      courseImg: "",
      courseTitle: "Responsive Design with React",
      topic: "React",
      author: "Joseph Marie",
      favourite: true,
      finalPrice: 463,
      mrp: 563,
    },
  ],
};
const UPDATE_WISH_LIST = "UPDATE_WISH_LIST";
export const wishListReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_WISH_LIST: {
      let cartUpdatedItems = [];
      if (
        state.listOfCourse.filter((data) => data.id === action.payload.id)
          .length > 0
      ) {
        cartUpdatedItems = state.listOfCourse.filter(
          (data) => data.id !== action.payload.id
        );
      } else {
        cartUpdatedItems = [
          ...state.listOfCourse,
          { ...action.payload, favourite: !action.payload.favourite },
        ];
      }
      return {
        listOfCourse: cartUpdatedItems,
      };
    }

    default:
      return state;
  }
};
