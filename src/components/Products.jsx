import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add} from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Products = () => {
    // const [products, getProducts] = useState([]);
    const {data: products, status} = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result));
        //     console.log("products", products);
    }, []);

    if(status === 'loading') {
        return <p>Loading...</p>
    }

    if(status === 'error') {
        return <p>Something went wrong! Try again later...</p>
    }

    const addToCart = (product) => {
        dispatch(add(product));
    }

    const cards = products.map(product => (
        <div className="max-w-sm w-full h-[400px] rounded overflow-hidden shadow-lg m-auto flex flex-col justify-between" key={product.id}>
            <div className='flex justify-center p-4'>
                <img className="w-[100px] h-[130px] object-contain" src={product.image} alt={product.title} />
            </div>
            <div className="px-6 py-4 flex-grow">
                <div className='flex justify-center'>
                    <h2 className="font-bold text-xl mb-2 text-center">{product.title}</h2>
                </div>
                <div className='flex justify-center'>
                    <p className="text-gray-700 text-base text-center">INR: {product.price}</p>
                </div>
            </div>
            <div className="flex justify-center px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  onClick={() => addToCart(product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    ));

    return (
        <>
            <h1 className='text-center text-2xl font-bold my-4'>Product Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {cards}
            </div>
        </>
    );
};

export default Products;




