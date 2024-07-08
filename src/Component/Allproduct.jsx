import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../app/getuserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Allproduct = () => {
  const dispatch = useDispatch();
  const { allshoppingProducts, searchData } = useSelector((state) => state.app);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (
      allshoppingProducts.products &&
      allshoppingProducts.products.length > 0
    ) {
      setProducts(allshoppingProducts.products);
    }
  }, [allshoppingProducts]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const searchFilteredProducts = filteredProducts.filter((e) => {
    if (searchData.length === 0) {
      return e;
    } else {
      return e.title.toLowerCase().includes(searchData.toLowerCase());
    }
  });

  if (searchFilteredProducts.length === 0) {
      return <Loader/>
  }

  const list = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG-aRbw1CudC0hOxCy2HwDAYQoMqb9Esnew&s",
      name: "groceries",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nBZYXZ8BXq1sj1KXF6_Yt3jmKg_qf6J9YA&s",
      name: "mens-shirts",
    },
    {
      image:
        "https://img.etimg.com/photo/msid-98815516,imgsize-24654/LavaZ3.jpg",
      name: "mobile-accessories",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxNC-U1JE-65Jo11KNnLj3tRNbcn2szMtpw&s",
      name: "furniture",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUVyErN0K4wF0xkCWSHc62-nkW1zApS3ytg&s",
      name: "home-decoration",
    },
    {
      image:
        "https://hometown.gumlet.io/media/cms/icons/cookware_600.jpg?w=300&dpr=2.6",
      name: "kitchen-accessories",
    },
    {
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
      name: "laptops",
    },
    {
      image:
        "https://contents.mediadecathlon.com/p2393894/ae11c369077717da979826d33db65b1c/p2393894.jpg?format=auto&quality=70&f=650x0",
      name: "mens-shoes",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",
      name: "mens-watches",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/017/350/132/original/red-cancel-icon-design-png.png",
      name: "",
    },
  ];

  return (
    <>
      <div className="flex shadow-sm mx-2  items-center justify-center flex-row w-full overflow-x-auto mt-16 mb-4 gap-4 p-4 rounded">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleCategoryClick(item.name)}
          >
            <img
              src={item.image}
              alt={`Image ${index}`}
              className="rounded h-8 w-8 md:h-14 md:w-14 mx-2 md:mr-4 md:ml-4"
            />
          </div>
        ))}
      </div>

      <div className="h-screen bg-[#f8f9fa]">
        <section className="text-gray-600 body-font bg-[#f8f9fa]">
          <div className="container px-5 py-24 mx-auto bg-[#f8f9fa]">
            <div className="flex flex-wrap mx-6 bg-[#f8f9fa]">
              {searchFilteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md"
                >
                  <Link to={`/singlePage/${item.id}`}>
                    <div className="block relative h-48 rounded overflow-hidden bg-cover bg-no-repeat">
                      <img
                        alt="ecommerce"
                        className="rounded-xl h-36 md:h-48 w-full hover:scale-125 duration-1000 cursor-pointer"
                        src={item.images[0]}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">${item.price}</p>
                      <p className="mt-1 text-blue-500 cursor-pointer">
                        Learn More {"->"}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Allproduct;
