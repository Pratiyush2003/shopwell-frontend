import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cartproduct, fetchAllProducts } from "../app/getuserSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/getuserSlice";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "./Loader";

const SingleProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allshoppingProducts } = useSelector((state) => state.app);
  const [product, setProduct] = useState(null);
  const [relatedproduct, setRelatedProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (allshoppingProducts.products && allshoppingProducts.products.length > 0) {
      const filteredProduct = allshoppingProducts.products.find(
        (p) => p.id === parseInt(id)
      );
      setProduct(filteredProduct);
      setLoading(false);
    }
  }, [allshoppingProducts, id]);

  useEffect(() => {
    if (product && allshoppingProducts.products) {
      const findRelatedProduct = allshoppingProducts.products.filter(
        (p) => p.category === product.category
      );
      setRelatedProducts(findRelatedProduct);
    }
  }, [product, allshoppingProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  if (!relatedproduct) {
    return <Loader />;
  }

  const selectedProduct = {
    image: product.images[0],
    id: product.id,
    price: product.price,
    title: product.title,
    brands: product.brand,
  };

  const handleCart = () => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(addToCart(selectedProduct));
      dispatch(cartproduct());
      toast.success('Added to the cart!');
    } else {
      navigate("/LoginPage");
    }
  };

  return (
    <div className="bg-[#edf2f4]">
      <Toaster />
      <section className="text-gray-600 bg-white body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full md:h-auto h-64 overflow-hidden rounded"
              src={product.images[count]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex flex-row justify-center gap-4">
                {product.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      className="md:h-28 md:w-52"
                      onClick={() => setCount(index)}
                      alt={`product-${index}`}
                    />
                  </div>
                ))}
              </div>
              <h2 className="text-sm title-font text-gray-500 tracking-widest mt-4">
                {product.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2  mb-5">
                <div className="flex ml-6 items-center">
                  <p className="mr-3">Rating :</p>
                  <span className="text-yellow-400 font-bold text-xl">
                    {product.rating} &#9733;
                  </span>
                  <div className="relative">
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button onClick={handleCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="text-xl ml-12 mt-5">Related Products</p>
      <div className="bg-white">
        <div className="w-full mt-4 p-8 pb-4 bg-white">
          <div className="flex mx-auto items-center justify-start flex-row overflow-x-auto gap-4 rounded">
            {relatedproduct.map((p, index) => {
              return (
                <div key={index}>
                  <div className="card m-4 w-48 md:w-96 shadow-xl flex-shrink-0">
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
                      <h2 className="card-title text-sm md:text-lg line-clamp-1">
                        {p.title}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
