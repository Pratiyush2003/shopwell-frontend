import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../app/getuserSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Products = () => {
  const dispatch = useDispatch();
  const { allshoppingProducts } = useSelector((state) => state.app);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (allshoppingProducts.products && allshoppingProducts.products.length > 0) {
      setProduct(allshoppingProducts.products);
    }
  }, [allshoppingProducts]);

  const categories = [
    { name: 'furniture', title: 'Furniture' },
    { name: 'mobile-accessories', title: 'Mobile Accessories' },
    { name: 'laptops', title: 'Laptops' },
  ];

  if(allshoppingProducts.length === 0){
    return <Loader/>
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full p-8 pb-4 bg-white">
        {categories.map((category) => {
          const filteredProducts = product.filter((p) => p.category === category.name);
          return (
            <div className="mb-8" key={category.name}>
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <div className="flex overflow-x-auto gap-4">
                {filteredProducts.map((p, index) => (
                  <div className="card m-4 w-48 md:w-72 shadow-xl flex-shrink-0" key={index}>
                    <figure className="px-4 pt-4 relative overflow-hidden bg-cover bg-no-repeat">
                      <Link to={`/singlePage/${p.id}`}>
                        <img
                          src={p.images[0]}
                          alt="loading..."
                          className="rounded-xl h-36 md:h-48 w-full hover:scale-125 duration-1000 cursor-pointer"
                        />
                      </Link>
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-sm md:text-lg line-clamp-1">{p.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
