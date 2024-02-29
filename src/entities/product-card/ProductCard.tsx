import React from "react";
import cls from "./ProductCard.module.scss";
import Logo from "../../assets/logo4.svg";

const ProductCard = ({ id, name, img, describe, price }) => {
  return (
    <div className={cls.productCard}>
      <div className={cls.productCard__left}>
        <img
          className={cls.productCard__left__logo}
          width={100}
          src={
            "https://www.traektoria.ru/local/traektoria_ta/build/img/logo_traektoria.svg"
          }
        ></img>
        <h3 className={cls.productCard__left__name}>{name}</h3>
        <div className={cls.productCard__left__info}>
          <p className={cls.productCard__left__info__model}>{describe}</p>
          <p className={cls.productCard__left__info__price}>${price}</p>
          <a className={cls.productCard__left__info__btn}>
            GET IT NOW {"--->"}{" "}
          </a>
        </div>
      </div>
      <div className={cls.productCard__right}>
        <img src={img} className={cls.productCard__right__img} />
      </div>
    </div>
  );
};
//   <img className={cls.header__logo} width={250} src={Logo} />
export default ProductCard;
