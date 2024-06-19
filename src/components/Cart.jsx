import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
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
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
              onClick={() => removeToCart(product.id)}>
                Remove Item
            </button>
        </div>
    </div>
));

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {cards}
      </div>
    </div>
  )
}

export default Cart;
