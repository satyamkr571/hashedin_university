import React, { useState, useEffect } from "react";
import style from "./WishListPage.module.scss";
import Pane from "../ui/Pane";
import FilterBar from "../components/FilterBar";
import Card from "../ui/Card";
import CourseList from "../components/CourseList";
import { useSelector } from "react-redux";
import CartList from "../components/CartList";
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
const WishListPage = () => {
  const courseList = useSelector(
    (state: RootState) => state.wishListReducer.listOfCourse
  );
  const [sortKey, setSortKey] = useState("");
  const [updatedCourseList, setupdatedCourseList] = useState([{}]);

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
          <CourseList courseListData={updatedCourseList} page="wishlist" />
        </div>
        <div className={style["allcourse__right-container"]}>
          <Card className={style.right__card}>
            <CartList />
          </Card>
        </div>
      </>
    </Pane>
  );
};

export default WishListPage;
