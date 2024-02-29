// import React, { useEffect, useState } from "react";
// import ProductCard from "../../entities/product-card/ProductCard";
// import Header from "../../shared/layout/Header/Header";
// import cls from "./ProductsPage.module.scss";
// import { getAllSneakers } from "../../api/get/sneakers";

// const ProductsPage = () => {
//   const [sneakers, setSneakers] = useState([]);

//   useEffect(() => {
//     getAllSneakers().then((data) => setSneakers(data));
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className={cls.productsPage}>
//         {sneakers.map((product) => {
//           console.log(product.title.length);
//           let title = product.title.split(" ");
//           title.length = 3;
//           title = title.join(" ");

//           console.log(title);
//           return (
//             <ProductCard
//               key={product.title}
//               id={product.id}
//               name={title}
//               img={product.img}
//               describe={product.brand}
//               price={product.price}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
// ProductsPage.tsx
import React, { useEffect, useState } from "react";
import ProductCard from "../../entities/product-card/ProductCard";
import Header from "../../shared/layout/Header/Header";
import Menu from "../../menu/Menu";
import cls from "./ProductsPage.module.scss";
import { getAllSneakers } from "../../api/get/sneakers";

const ProductsPage = () => {
  const [sneakers, setSneakers] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    getAllSneakers().then((data) => setSneakers(data));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header />
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      <div className={cls.productsPage}>
        {sneakers.map((product) => {
          console.log(product.title.length);
          let title = product.title.split(" ");
          title.length = 3;
          title = title.join(" ");

          console.log(title);
          return (
            <ProductCard
              key={product.title}
              id={product.id}
              name={title}
              img={product.img}
              describe={product.brand}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
