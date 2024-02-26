import React from 'react';
import ProductCard from '../../entities/product-card/ProductCard';

const ProductsPage = () => {
    const products = [
        {
            id: 1,
            name: 'THEM SKATES 908 POWDER',
        },
        {
            id: 2,
            name: 'Кроссовки крутые',
        },
    ];
    return (
        <>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </>
    );
};

export default ProductsPage;
