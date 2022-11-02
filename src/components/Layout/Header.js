import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import cafeImg from "../img/cafe.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Sitha Cafe 🍵</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={cafeImg} alt="coffee cafe menu" />
      </div>
    </React.Fragment>
  );
};

export default Header;
