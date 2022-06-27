import React from "react";
import style from "./Navbar.module.scss";
import hashedinLogo from "../assets/image/hashedinLogo.png";
import user from "../assets/image/user.png";
import cart from "../assets/image/cart.png";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const current_loaction = useLocation();

  return (
    <div className={style.navbar}>
      <div className={style["navbar__img-container"]}>
        <Link to="/">
          <img
            className={style.navbar__img}
            src={hashedinLogo}
            alt="navbar_logo"
          />
        </Link>
      </div>
      <div className={style["navbar__menu-container"]}>
        <Link
          className={
            current_loaction.pathname === "/courses"
              ? style["navbar__menu__link--active"]
              : style.navbar__menu__link
          }
          to="/courses">
          COURSES
        </Link>
        <Link
          className={
            current_loaction.pathname === "/mywishlist"
              ? style["navbar__menu__link--active"]
              : style.navbar__menu__link
          }
          to="/mywishlist">
          MY WISHLIST
        </Link>
        <Link
          className={
            current_loaction.pathname === "/cart"
              ? style["navbar__menu__link--active"]
              : style.navbar__menu__link
          }
          to="/cart">
          {/* <i className="fa-solid fa-cart-shopping"></i> */}
          <img className={style.nav__logo} src={cart} alt="cart logo" />
        </Link>
        <Link
          className={
            current_loaction.pathname === "/profile"
              ? style["navbar__menu__link--active"]
              : style.navbar__menu__link
          }
          to="/profile">
          {/* <i className="fa-regular fa-user"></i> */}
          <img className={style.nav__logo} src={user} alt="user logo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
