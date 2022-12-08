import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header/header.module.sass";
const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to='/'><span>Интерьер.</span></Link>
      </div>
      <div className={styles.navigation}>
        <Link to='/'><span>Каталог</span></Link>
        <Link to='/cart'><span>Корзина</span></Link>
      </div>
    </div>
  );
};

export default Header;
