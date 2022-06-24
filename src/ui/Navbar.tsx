import React from 'react'
import style from "./Navbar.module.scss";
import hashedinLogo from '../assets/image/hashedinLogo.png'
function Navbar() {
  return (
      <div className={style.navbar}>
          <div className={style["navbar__img-container"]}><img className={style.navbar__img} src={hashedinLogo} alt="navbar_logo"/></div>
    </div>
  )
}

export default Navbar