import React from "react";
import cls from "../menu/Menu.module.scss";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${cls.menu} ${isOpen ? cls.open : ""}`}>
      <input type="search" />
      <ul>
        <li>NEW</li>
        <li>BOARDS</li>
        <li>TOPS</li>
        <li>SNEAKERS</li>
        <li>HATS</li>
        <li>ACCESSORIES</li>
        <li>CONTACT</li>
        <li>ACOUNT</li>
      </ul>
      <button className={cls.closeButton} onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};

export default Menu;
