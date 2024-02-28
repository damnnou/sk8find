import React from 'react';
import ProductCard from '../../entities/product-card/ProductCard';
import Header from '../../shared/layout/Header/Header';
import cls from './ProductsPage.module.scss';
import { getAllSneakers } from '../../api/get/sneakers';

const ProductsPage = () => {
    const [sneakers, setSneakers] = React.useState([]);

    React.useEffect(() => {
        getAllSneakers().then((data) => console.log(data));
    }, []);

    return (
        <>
            <Header />
            <div className={cls.productsPage}>
                {sneakers.map((sneakers) => (
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
