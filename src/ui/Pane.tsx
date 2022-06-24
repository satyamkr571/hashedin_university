import React from "react";
import style from "./Pane.module.scss";

type Props = {
  className: string;
  children: JSX.Element;
};
const Pane = ({ className, children }: Props) => {
  const classNames = `${style.pane} ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default Pane;
