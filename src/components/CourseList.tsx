import React from "react";
import { useDispatch } from "react-redux";
import Card from "../ui/Card";
import style from "./CourseList.module.scss";
import favActive from "../assets/image/favActive.png";
import fav from "../assets/image/fav.png";
import deletecart from "../assets/image/deletecart.png";
import forward from "../assets/image/forward.png";
import { useNavigate } from "react-router-dom";

type Props = {
  courseListData: any;
  page: string;
};

const CourseList = ({ courseListData, page }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartClickHandler = (data: object) => {
    dispatch({ type: "UPDATE_CART_LIST", payload: data });
  };
  const addToWishListClickHandler = (data: object) => {
    console.log("addToWishListClickHandler");
    dispatch({ type: "UPDATE_WISH_LIST", payload: data });

    dispatch({ type: "UPDATE_COURSES_WISHLIST", payload: data });
  };
  const onCourseClickHandler = (courseDetails: any) => {
    console.log(courseDetails);
    dispatch({ type: "UPDATE_COURSES_DETAILS", payload: courseDetails });
    navigate("/coursedetails");
  };
  const courseListEle: JSX.Element = courseListData.map(
    (data: any, index: any) => (
      <Card className={style.courselist_container} key={data.id + index}>
        <>
          <div className={style.courselist__image}></div>
          <div className={style.courselist__title}>
            {data.courseTitle}
            <div className={style.courselist__topic}>{data.topic}</div>
          </div>
          <div className={style.courselist__data}>{data.author}</div>
          <div
            className={style.courselist__fav}
            onClick={() => addToWishListClickHandler(data)}>
            {page === "course" ? (
              data.favourite ? (
                <img
                  src={favActive}
                  alt="fav logo"
                  height="26px"
                  width="26px"
                />
              ) : (
                <img src={fav} alt="fav logo" height="26px" width="26px" />
              )
            ) : null}
          </div>

          <div className={style.courselist__discounted}>
            Rs {data.finalPrice}/-
          </div>
          <div className={style.courselist__mrp}>Rs {data.mrp}/-</div>
          {page === "cartPage" ? (
            <div
              className={style.courselist__fav}
              onClick={() => addToCartClickHandler(data)}>
              <img src={deletecart} alt="delete" />
            </div>
          ) : (
            <div
              className={style.courselist__cart}
              onClick={() => addToCartClickHandler(data)}>
              ADD TO CART
            </div>
          )}
          {page === "wishlist" ? (
            <div
              className={style.courselist__fav}
              onClick={() => addToWishListClickHandler(data)}>
              <img src={deletecart} alt="delete"></img>
            </div>
          ) : null}

          <div
            className={style.courselist__fav}
            onClick={() => onCourseClickHandler(data)}>
            <img src={forward} alt="forward logo" height="16px" width="10px" />
          </div>
        </>
      </Card>
    )
  );
  return <>{courseListEle}</>;
};

export default CourseList;
