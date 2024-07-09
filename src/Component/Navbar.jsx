import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { cartproduct, searchproduct } from "../app/getuserSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { allCartProduct } = useSelector((state) => state.app);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleInputClick = () => {
    if (location.pathname !== "/AllProducts") {
      navigate("/AllProducts");
    }
  };

  useEffect(() => {
    dispatch(searchproduct(search));
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(cartproduct());
  }, [dispatch]);

  return (
    <div className="w-full bg-white fixed top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img
                className="w-10 rounded"
                src="https://marketplace.canva.com/EAE72jfknRM/2/0/1600w/canva-yellow-and-black-online-shop-business-logo-AvRZNVCTIeg.jpg"
                alt="logo"
              />
            </span>
            <span className="font-bold text-black font-serif">ShopWell</span>
          </div>
        </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                  onClick={handleInputClick}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link to="/LoginPage">
            <button
              type="button"
              className="rounded-md bg-black mx-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Login
            </button>
          </Link>
          <Link to="/CheckoutOne">
            <button
              type="button"
              className="rounded-md bg-black mx-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Cart {allCartProduct.length}
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        className="w-10"
                        src="https://marketplace.canva.com/EAE72jfknRM/2/0/1600w/canva-yellow-and-black-online-shop-business-logo-AvRZNVCTIeg.jpg"
                        alt="logo"
                      />
                    </span>
                    <span className="font-bold text-black font-serif">ShopWell</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <label className="input input-bordered flex items-center gap-2 bg-white">
                      <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={handleInputClick}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                  </nav>
                </div>
                <div>
                  <Link to="/LoginPage">
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/CheckoutOne">
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Cart {allCartProduct.length}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
