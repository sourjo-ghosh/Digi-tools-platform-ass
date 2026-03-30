import React from 'react';
import AddedProductsSingleCard from './AddedProductsSingleCard';

const AddedProductsCard = ({SelectedCart}) => {
    console.log(SelectedCart)
    return (
        <div className=' border border-gray-300 p-5 rounded-4xl mt-10'>
            <p>Your Cart</p>
            <div className='flex flex-col justify-center items-center gap-4'>
                {
                    SelectedCart.map(data => <AddedProductsSingleCard data={data} key={data.id}></AddedProductsSingleCard>)
                }
            </div>
        </div>
    );
};

export default AddedProductsCard;