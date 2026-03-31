import React, { use } from 'react';
import ProductsCard from '../AllProductsBeforeAddedToCart/ProductsCard';
import AddedProductsCard from '../AddToCartProducts/AddedProductsCard';

const ProductsRender = ({ ProductPromises, SelectedCart, setSelectedCart, Active}) => {
    const ProductsData = use(ProductPromises);
    return (
        <div>
             {Active === "products" ? (
        <ProductsCard ProductsData={ProductsData} SelectedCart={SelectedCart} setSelectedCart={setSelectedCart}></ProductsCard>
      ) : (
        <AddedProductsCard ProductsData={ProductsData} SelectedCart={SelectedCart} setSelectedCart={setSelectedCart}></AddedProductsCard>
      )}
        </div>
    );
};

export default ProductsRender;