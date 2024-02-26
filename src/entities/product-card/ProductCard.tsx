import React from "react";
import cls from "./ProductCard.module.scss";

const ProductCard = ({ id, name, img, describe, price }) => {
  return (
    <div className={cls.productCard}>
      <div className={cls.productCard__left}>
        <p className={cls.productCard__left__logo}>Logo</p>
        <h3 className={cls.productCard__left__name}>{name}</h3>
        <div className={cls.productCard__left__info}>
          <p className={cls.productCard__left__model}>{describe}</p>
          <p className={cls.productCard__left__price}>{price}$</p>
          <a className={cls.productCard__left__btn}>GET IT NOW {"--->"} </a>
        </div>
      </div>
      <div className={cls.productCard__right}>
        <img src={img} className={cls.productCard__right__img} />
      </div>
    </div>
  );
};

export default ProductCard;
