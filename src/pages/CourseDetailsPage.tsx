import React from "react";
import Pane from "../ui/Pane";
import style from "./CourseDetailsPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import warning from "../assets/image/warning.png";
interface RootState {
  courseDetailReducer: {
    listOfCourse: listOfCourse;
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
const CoursesDetailsPage = () => {
  const courseData = useSelector(
    (state: RootState) => state.courseDetailReducer.listOfCourse
  );
  const data = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];
  const dispatch = useDispatch();
  const addToCartClickHandler = (data: object) => {
    dispatch({ type: "UPDATE_CART_LIST", payload: data });
    dispatch({
      type: "UPDATE_MODAL_STATUS",
      payload: {
        type: "success",
        message: "Your Course is successfully added to the Cart",
      },
    });
  };
  const addToWishListClickHandler = (data: object) => {
    dispatch({ type: "UPDATE_WISH_LIST", payload: data });
    dispatch({ type: "UPDATE_COURSES_WISHLIST", payload: data });
    dispatch({
      type: "UPDATE_MODAL_STATUS",
      payload: {
        type: "success",
        message: "Your Course is successfully added to the Wishlist",
      },
    });
  };
  return (
    <>
      <Pane className={style.coursepane}>
        <>
          <Link className={style.coursepane__link} to="/courses">
            All Courses
          </Link>
          {`>`} {courseData.courseTitle}
        </>
      </Pane>
      <div className={style.landingPage}>
        <div className={style.parentCard}>
          <div className={style.firstChild}>
            <div className={style.parentCard_heading}>
              {courseData.courseTitle}
            </div>
            <div className={style.parentCard_sub_heading}>
              {courseData.courseTitle}
            </div>
            <div className={style.parentCard_title}>{courseData.author}</div>
            <div className={style.parentCard_button_div}>
              <div className={style.reactButton}>{courseData.topic}</div>
              <div className={style.reactButton}>{courseData.topic}</div>
              <div className={style.reactButton}>{courseData.topic}</div>
            </div>
          </div>
          <div className={style.secondChild}></div>
        </div>
        <div className={style.childCard}>
          <div className={style.first_childCard}>
            <div className={style.childtext}>Course Deatils</div>
            {data.map((data, index) => {
              return (
                <div className={style.textData} key={index}>
                  {data}
                </div>
              );
            })}
          </div>
          <div className={style.second_childCard}>
            <div className={style.videoCard}>
              <video width="100%" height="100%" controls>
                <source src="movie.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={style.wishlistCard}>
              <div className={style.wishlist_text}>
                Rs {courseData.finalPrice}/-
              </div>
              <div className={style.wishlist_child_text}>
                Rs {courseData.mrp}/-
              </div>
              <div className={style.coursedeatils__price_duration}>
                <img src={warning} alt="warning" height="24px" width="24px" /> 8
                hours for this price
              </div>
              <div className={style.coursedeatils__button_container}>
                <div
                  className={style.coursedeatils__button__cart}
                  onClick={() => addToCartClickHandler(courseData)}>
                  ADD TO CART
                </div>
                <div
                  className={style.coursedeatils__button__wishlist}
                  onClick={() => addToWishListClickHandler(courseData)}>
                  ADD TO WISHLIST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesDetailsPage;
