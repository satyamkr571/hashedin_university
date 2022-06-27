import React, { useState, useEffect } from "react";
import style from "./CartList.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
function CartList() {
  const [totalBill, setTotalBill] = useState(0);
  const courseList = useSelector(
    (state: RootState) => state.cartReducer.listOfCourse
  );
  useEffect(() => {
    const toalCost = courseList.map((data) => {
      return Number(data.finalPrice);
    });
    setTotalBill(
      toalCost.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    );
  }, [courseList]);
  return (
    <div className={style.cartlist}>
      <div className={style.cartlist__title}>YOUR CART DETAILS</div>
      {courseList.map((data) => {
        return (
          <div className={style.cartlist__items} key={data.id}>
            <div className={style.cartlist__items__list}>
              <div className={style.cartlist__items__img}> </div>
              <div className={style.cartlist__items__title}>
                {data.courseTitle}
              </div>
            </div>
            <div className={style.cartlist__items__price}>
              Rs {data.finalPrice}/-
            </div>
          </div>
        );
      })}
      <div className={style.cartList__checkout_container}>
        <div className={style.cartList__checkout__bill}>
          <div style={{ fontSize: "1rem" }}>Total Card Value</div>
          <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            Rs {totalBill}/-
          </div>
        </div>
        {totalBill > 0 ? (
          <Link to="/cart" className={style.cartList__checkout__button}>
            GO TO CHECKOUT
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default CartList;
