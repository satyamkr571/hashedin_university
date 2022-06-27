import React, { useState, useEffect } from "react";
import style from "./AllCoursePage.module.scss";
import Pane from "../ui/Pane";
import FilterBar from "../components/FilterBar";
import Card from "../ui/Card";
import SearchBar from "../components/SearchBar";
import CourseList from "../components/CourseList";
import { useSelector } from "react-redux";
import CartList from "../components/CartList";
interface RootState {
  courseReducer: {
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
const AllCoursePage = () => {
  const [searchKey, setSearchKey] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [updatedCourseList, setupdatedCourseList] = useState([{}]);
  let courseList = useSelector(
    (state: RootState) => state.courseReducer.listOfCourse
  );
  useEffect(() => {
    const filterData = courseList.filter((data) => {
      return (
        data.courseTitle.indexOf(searchKey) >= 0 ||
        data.courseTitle.indexOf(
          searchKey[0].toUpperCase() + searchKey.substring(1)
        ) >= 0 ||
        data.finalPrice + "" === searchKey ||
        data.author.indexOf(searchKey) >= 0 ||
        data.author.indexOf(
          searchKey[0].toUpperCase() + searchKey.substring(1)
        ) >= 0 ||
        data.topic.indexOf(searchKey) >= 0 ||
        data.topic.indexOf(
          searchKey[0].toUpperCase() + searchKey.substring(1)
        ) >= 0
      );
    });
    setupdatedCourseList(filterData);
  }, [searchKey, courseList]);
  useEffect(() => {
    if (sortKey === "hightolow") {
      const filterData = courseList.sort(
        (a: any, b: any) => a.finalPrice - b.finalPrice
      );
      setupdatedCourseList(filterData);
    } else if (sortKey === "lowtohigh") {
      const filterData = courseList.sort(
        (a: any, b: any) => b.finalPrice - a.finalPrice
      );
      setupdatedCourseList(filterData);
    } else {
      setupdatedCourseList(courseList);
    }
  }, [sortKey, courseList]);

  return (
    <Pane className={style.allcourse_pane}>
      <>
        <div className={style["allcourse__left-container"]}>
          <FilterBar filterBarTitle="All Courses" onChange={setSortKey} />
          <CourseList courseListData={updatedCourseList} page="course" />
        </div>
        <div className={style["allcourse__right-container"]}>
          <SearchBar onChange={setSearchKey} />
          <Card className={style.right__card}>
            <CartList />
          </Card>
        </div>
      </>
    </Pane>
  );
};

export default AllCoursePage;
