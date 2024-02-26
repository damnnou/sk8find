import React from "react";
import ProductCard from "../../entities/product-card/ProductCard";
import Header from "../../shared/layout/Header/Header";
import cls from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "THEM SKATES 908 POWDER",
      price: 200,
      describe: "MODEL BY ALEX BROSKOW",
      img: "https://image.goat.com/750/attachments/product_template_pictures/images/097/208/456/original/1228708_00.png.png",
    },
    {
      id: 2,
      name: "AIR JORDAN PRO NIGGER BLACK",
      price: 150,
      describe: "MODEL BY CHURKA",
      img: "https://image.goat.com/750/attachments/product_template_pictures/images/087/983/615/original/1131716_00.png.png",
    },
  ];

  return (
    <>
      <Header />
      <div className={cls.productsPage}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            describe={product.describe}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
