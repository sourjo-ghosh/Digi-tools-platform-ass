import React from 'react';

const AddedProductsSingleCard = ({data}) => {
    console.log(data)
    return (
        <div className='flex justify-around items-center border border-gray-300 p-6 rounded-4xl'>
            <div className='flex justify-start items-center gap-2'>
            <img src={data.img} alt="" className='w-10 h-10 rounded-full' />
            <div>
            <p className='font-bold text-[#101727] text-xl'>{data.name}</p>
            <p className='text-[#627382] text-[16px]'>${data.price}</p>
            </div>
            </div>
            <button className='btn'>
                Remove
            </button>
        </div>
    );
};

export default AddedProductsSingleCard;