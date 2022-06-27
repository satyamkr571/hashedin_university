import React, { useState, useEffect } from "react";
import style from "./CartPage.module.scss";
import Pane from "../ui/Pane";
import { useSelector } from "react-redux";
import Card from "../ui/Card";
import CourseList from "../components/CourseList";
import RecommendedCourse from "../components/RecommendedCourse";
import Checkout from "../components/Checkout";
interface RootState {
  cartReducer: {
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
const CartPage = () => {
  const [totalCourse, setTotalCourse] = useState(0);
  const courseList = useSelector(
    (state: RootState) => state.cartReducer.listOfCourse
  );
  useEffect(() => {
    setTotalCourse(courseList.length);
  }, [courseList]);

  return (
    <Pane className={style.cartpage}>
      <>
        <div className={style.cartpage__head}>
          {totalCourse + " "} Courses in the Cart
        </div>
        <div className={style.cart}>
          <div className={style["cart__left-container"]}>
            <CourseList courseListData={courseList} page="cartPage" />
            <RecommendedCourse />
          </div>
          <div className={style["cart__right-container"]}>
            <Card className={style.right__card}>
              <Checkout />
            </Card>
          </div>
        </div>
      </>
    </Pane>
  );
};

export default CartPage;
