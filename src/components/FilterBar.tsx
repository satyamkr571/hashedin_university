import React from "react";
import style from "./FilterBar.module.scss";
type Props = {
  filterBarTitle: string;
  onChange: any;
};
const FilterBar = ({ filterBarTitle, onChange }: Props) => {
  return (
    <div className={style.filterbar_container}>
      <div className={style.filterbar__title}>{filterBarTitle}</div>
      <div className={style.filterbar__menu}>
        <select
          className={style.filterbar__menu__select}
          name="price"
          id="price"
          onChange={(e) => onChange(e.target.value)}>
          <option className={style.filterbar__menu__option} value="normal">
            Course Price
          </option>
          <option value="lowtohigh">Low to Hight</option>
          <option value="hightolow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
