import React from "react";
import style from "./RecommendedCourse.module.scss";
import { useSelector } from "react-redux";
import CourseList from "./CourseList";
interface RootState {
  wishListReducer: {
    listOfCourse: [listOfCourse];
  };
}
interface listOfCourse {
  id: string;
  courseImg: string;
  courseTitle: string;
  topic: string;
  author: string;
  favourite: boolean;
  finalPrice: string;
  mrp: string;
}
const RecommendedCourse = () => {
  const courseList = useSelector(
    (state: RootState) => state.wishListReducer.listOfCourse
  );
  return (
    <div className={style.recommended}>
      <div className={style.recommended__head}>Recommended Courses</div>
      <CourseList courseListData={courseList} page="course" />
    </div>
  );
};

export default RecommendedCourse;
