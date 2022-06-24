import React from "react";
import style from "./PageHeader.module.scss";
import Pane from "./Pane";
import react from "../assets/image/react.png";
type Props = {
  pageTitle: string;
};
const PageHeader = ({ pageTitle }: Props) => {
  return (
    <Pane className="">
      <div className={style.pageheader}>
        <div className={style.pageheader__title}>{pageTitle}</div>
        <div className={style.pageheader__logo}>
          <img
            className={style.head__logo__design}
            src={react}
            alt="react_logo"></img>
        </div>
      </div>
    </Pane>
  );
};

export default PageHeader;
