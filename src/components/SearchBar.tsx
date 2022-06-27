import React from "react";
import style from "./SearchBar.module.scss";
import search_logo from "../assets/image/search_logo.png";

type Props = {
  onChange: any;
};
const SearchBar = ({ onChange }: Props) => {
  return (
    <div className={style.searchbar}>
      <input
        type="text"
        className={style.searchbar__input}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={style.searchbar__logo}>
        <img
          className={style.searchbar__logo_image}
          src={search_logo}
          alt="search logo"
        />
      </div>
    </div>
  );
};

export default SearchBar;
