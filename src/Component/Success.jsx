import React, { useEffect, useState } from 'react';
import { Trash, Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { cartproduct } from '../app/getuserSlice';
import { Link } from 'react-router-dom';

const Success = () => {
  const { allCartProduct } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(cartproduct()).then(() => setLoading(false));
  }, [dispatch]);

  console.log(allCartProduct);

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  return (
    <div className="mx-auto mt-20 flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold text-gray-800">Your Order</h2>
      <ul className="flex flex-col divide-y divide-gray-200">
        {allCartProduct && allCartProduct.map((product , index) => (
          <li key={index} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.image}
                alt={product.title}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug text-gray-900 sm:pr-8">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.brands}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">₹{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm text-gray-600">
                  <Link to={`/singlePage/${product.id}`}>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 text-blue-500 hover:text-blue-700">
                    <span>View Product</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right text-gray-800">
        <p>
          Total Paid Amount:
          <span className="font-semibold text-green-500"> ₹{allCartProduct.reduce((total, product) => total + product.price, 0)}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to={"/"}>
        <button
          type="button"
          className="rounded-md border border-gray-800 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
        >
          Back to shop
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
