import React from "react";
import style from "./Card.module.scss";
type Props = {
  className: string;
  children: JSX.Element;
};
const Card = ({ className, children }: Props) => {
  const classNames = `${style.card_conatiner} ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default Card;
