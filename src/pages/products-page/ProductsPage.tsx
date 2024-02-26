import React from 'react';
import ProductCard from '../../entities/product-card/ProductCard';

const ProductsPage = () => {
    const products = [
        {
            id: 1,
            name: 'THEM SKATES 908 POWDER',
            img: 'https://image.goat.com/750/attachments/product_template_pictures/images/097/208/456/original/1228708_00.png.png',
        },
        {
            id: 2,
            name: 'Кроссовки крутые',
            img: 'https://image.goat.com/750/attachments/product_template_pictures/images/087/983/615/original/1131716_00.png.png',
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
