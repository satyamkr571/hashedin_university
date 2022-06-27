import React, { useState, useEffect } from "react";
import style from "./Checkout.module.scss";
import { useSelector, useDispatch } from "react-redux";
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
const Checkout = () => {
  const savedAmount = 1007;
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const courseList = useSelector(
    (state: RootState) => state.cartReducer.listOfCourse
  );
  useEffect(() => {
    const toalCost = courseList.map((data) => {
      return Number(data.finalPrice);
    });
    setTotalAmount(
      toalCost.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    );
  }, [courseList]);

  return (
    <div className={style.checkout}>
      <div className={style.checkout__tag}>Total Amount</div>
      <div className={style.checkout__amount}>Rs {totalAmount}-/</div>
      <div className={style.checkout__savedamount}>
        You have saved Rs {savedAmount}/-
      </div>
      <div
        className={style.checkout__button}
        onClick={() =>
          dispatch({
            type: "UPDATE_MODAL_STATUS",
            payload: {
              type: "success",
              message: "Your have successfully place your order",
            },
          })
        }>
        CHECKOUT
      </div>
    </div>
  );
};

export default Checkout;
