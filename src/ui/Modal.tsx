import React from "react";
import style from "./Modal.module.scss";
import success from "../assets/image/success.png";
import waring from "../assets/image/warning.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
type Props = {
  className: string;
  type: string;
  message: string;
};
const Modal = ({ className, message, type }: Props) => {
  const navigate = useNavigate();
  const classNames = `${style.modal} ${className}`;
  const dispatch = useDispatch();
     const navigate = useNavigate();
  const modalClickHandler = () => {
    dispatch({ type: "UPDATE_MODAL_STATUS" });
    navigate("/courses");
  };
  return (
    <div className={classNames}>
      <div className={style.modal__container}>
        <div className={style.modal__header}></div>
        <div className={style.modal__content}>
          <img
            className={style.modal__content__tick}
            src={type === "success" ? success : waring}
            alt="tick logo"
          />
          <div className={style.modal__content__message}>{message}</div>
        </div>
        <div className={style.modal__footer}>
          <div
            className={style.modal__footer__button}
            onClick={modalClickHandler}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
