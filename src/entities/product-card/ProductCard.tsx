import React from "react";
import cls from "./ProductCard.module.scss";

const ProductCard = ({ id, name, img }) => {
  return (
    <div className={cls.productCard}>
      <div className={cls.productCard__right}>
        <img src={img} className={cls.productCard__right__img} />
      </div>
      <div className={cls.productCard__left}>
        <p className={cls.productCard__logo}>Logo</p>
        <div className={cls.productCard__info}>
          <h3 className={cls.productCard__name}>{name}</h3>
          <p className={cls.productCard__model}>Model</p>
          <p className={cls.productCard__price}>$200</p>
          <a className={cls.productCard__btn}>GET IT NOW {"--->"} </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
