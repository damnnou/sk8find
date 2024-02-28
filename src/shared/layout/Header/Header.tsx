import React from "react";
import cls from "./Header.module.scss";
import MenuIcn from "../../../assets/menu.svg";
import Logo from "../../../assets/logo4.svg";

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.header__menu}>
        <img width={14} height={14} src={MenuIcn} />
        <p className={cls.header__menu__text}>MENU</p>
      </div>
      <img className={cls.header__logo} width={250} src={Logo} />
      <input placeholder="SEARCH" className={cls.header__search} />
      <div className={cls.header__profile}>
        <p className={cls.header__profile__text}>ACCOUNT</p>
        <p className={cls.header__profile__text}>CART</p>
      </div>
    </header>
  );
};

export default Header;
