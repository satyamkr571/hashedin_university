const initalState = {
  listOfCourse: [
    {
      id: "1",

      courseImg: "",
      courseTitle:
        "Responsive Design Course How to design responsive templates",
      topic: "React",
      author: "Joseph Marie",
      favourite: false,
      finalPrice: 562,
      mrp: 563,
    },
    {
      id: "2",
      courseImg: "",
      courseTitle: "Responsive Design Course",
      topic: "HTML+CSS",
      author: "Antile Sovrick",
      favourite: true,
      finalPrice: 322,
      mrp: 563,
    },
    {
      id: "3",
      courseImg: "",
      courseTitle: "Web Development with DJango",
      topic: "Python",
      author: "Stark Mavelid",
      favourite: false,
      finalPrice: 122,
      mrp: 563,
    },
    {
      id: "4",
      courseImg: "",
      courseTitle: "Responsive Design using CSS3",
      topic: "CSS",
      author: "Jhon Eddine",
      favourite: false,
      finalPrice: 422,
      mrp: 563,
    },
    {
      id: "5",
      courseImg: "",
      courseTitle: "Web Devlopemt with React",
      topic: "React",
      author: "Waschinide Steve",
      favourite: false,
      finalPrice: 521,
      mrp: 563,
    },
    {
      id: "6",
      courseImg: "",
      courseTitle: "React Bootcamp",
      topic: "React",
      author: "Rounik Sen",
      favourite: false,
      finalPrice: 421,
      mrp: 563,
    },
    {
      id: "7",
      courseImg: "",
      courseTitle: "Compelte Guide to TypeScript",
      topic: "Typescript",
      author: "Amir Delmon",
      favourite: false,
      finalPrice: 478,
      mrp: 563,
    },
    {
      id: "8",
      courseImg: "",
      courseTitle: "Javascript - from Zero to Hero",
      topic: "Javascript",
      author: "Duffink Reman",
      favourite: true,
      finalPrice: 518,
      mrp: 563,
    },
  ],
};
const UPDATE_COURSES_LIST = "UPDATE_COURSES_LIST";
const UPDATE_COURSES_WISHLIST = "UPDATE_COURSES_WISHLIST";
export const courseReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_COURSES_LIST:
      return {
        listOfCourse: [...state.listOfCourse, action.payload],
      };
    case UPDATE_COURSES_WISHLIST: {
      const updateCourseData = state.listOfCourse.map((data) => {
        if (data.id === action.payload.id) {
          return { ...data, favourite: !data.favourite };
        } else {
          return data;
        }
      });
      return {
        listOfCourse: updateCourseData,
      };
    }
    default:
      return state;
  }
};
