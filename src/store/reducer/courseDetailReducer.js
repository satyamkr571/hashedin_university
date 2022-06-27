const initalState = {
  listOfCourse: {
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
};
const UPDATE_COURSES_DETAILS = "UPDATE_COURSES_DETAILS";
export const courseDetailReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_COURSES_DETAILS:
      return { listOfCourse: action.payload };
    default:
      return state;
  }
};
