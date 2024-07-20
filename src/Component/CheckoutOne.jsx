import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cartproduct, deleteproduct } from "../app/getuserSlice";
import { useDispatch, useSelector } from "react-redux";
import NothingInCart from "./NothingInCart";
import toast, { Toaster } from 'react-hot-toast';

function CheckoutOne() {
    const { allCartProduct } = useSelector((state) => state.app);

    console.log(allCartProduct);
    const [totalPrice, setTotalPrice] = useState(0);
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        address: "",
        error: null,
    });
    const [loading, setLoading] = useState(false);
    const [userAddress, setUserAddress] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartproduct());
    }, [dispatch]);

    useEffect(() => {
        let price = 0;
        allCartProduct.forEach((element) => {
            price += element.price;
        });
        setTotalPrice(price);
    }, [allCartProduct]);

    const handleDelete = (id) => {
        dispatch(deleteproduct(id)).then(() => {
            dispatch(cartproduct());
        });
    };

    const handleGetLocation = () => {
        if ("geolocation" in navigator) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchAddress(latitude, longitude);
                },
                (error) => {
                    setLocation({
                        ...location,
                        error: "Error fetching location: " + error.message,
                    });
                    setLoading(false);
                }
            );
        } else {
            setLocation({
                ...location,
                error: "Geolocation is not available in your browser.",
            });
        }
    };

    const fetchAddress = (latitude, longitude) => {
        const apiKey = "6701a97b54764554ae54d743e0cd6f6d";
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.results.length > 0) {
                    const { formatted } = data.results[0];
                    setLocation({ latitude, longitude, address: formatted, error: null });
                    setUserAddress(formatted);
                } else {
                    setLocation({
                        latitude,
                        longitude,
                        address: "Location not found",
                        error: null,
                    });
                    setUserAddress("Location not found");
                }
                setLoading(false);
            })
            .catch((error) => {
                setLocation({
                    ...location,
                    error: "Error fetching address: " + error.message,
                });
                setLoading(false);
            });
    };

    const checkout = async () => {
        if (userAddress.trim() === "") {
          toast.error("Address Required")
            return;
        }

        try {
            const res = await fetch("https://shopwell-backend.onrender.com/api/payment/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: allCartProduct.map(product => ({
                        name: product.title,
                        price: Math.ceil(totalPrice),
                        quantity: 1 // Assuming quantity is always 1 in the cart
                    }))
                }),
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Failed to get redirect URL from the server.");
            }
        } catch (error) {
            console.error("Error in checkout process:", error);
        }
    };

    if (allCartProduct.length === 0) {
        return <NothingInCart />;
    }

    return (
        <div className="mx-auto max-w-4xl md:my-6 bg-white">
             <Toaster />
            <div className="overflow-hidden rounded-xl shadow mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Product List */}
                    <div className="bg-white px-5 py-6 md:px-8 ">
                        <div className="flow-root">
                            <ul className="-my-7 divide-y divide-gray-200">
                                {allCartProduct &&
                                    allCartProduct.map((product) => (
                                        <li
                                            key={product._id}
                                            className="flex items-stretch justify-between space-x-5 py-7"
                                        >
                                            <div className="flex flex-1 items-stretch">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                                                        src={product.image}
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <div className="ml-5 flex flex-col justify-between">
                                                    <div className="flex-1">
                                                        <p className="text-sm font-bold">
                                                            {product.brands}
                                                        </p>
                                                        <p className="mt-1.5 text-sm font-medium text-gray-500">
                                                            {product.title}
                                                        </p>
                                                    </div>
                                                    <p className="mt-4 text-xs font-medium">x 1</p>
                                                </div>
                                            </div>
                                            <div className="ml-auto flex flex-col items-end justify-between">
                                                <p className="text-right text-sm font-bold text-gray-900">
                                                    ${product.price}
                                                </p>
                                                <button
                                                    type="button"
                                                    className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                    onClick={() => handleDelete(product._id)}
                                                >
                                                    <span className="sr-only">Remove</span>
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <hr className="mt-6 border-gray-200 bg-white" />
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-center justify-between text-gray-600">
                                <p className="text-sm font-medium">Sub total</p>
                                <p className="text-sm font-medium">${Math.ceil(totalPrice)}</p>
                            </li>
                            <li className="flex items-center justify-between text-gray-900">
                                <p className="text-sm font-medium">Total</p>
                                <p className="text-sm font-bold">${Math.ceil(totalPrice)}</p>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    onClick={checkout}
                                >
                                    Make Payment
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="px-5 py-6 text-gray-900 md:px-8">
                        <div className="flow-root">
                            <div className="-my-6 divide-y divide-gray-200">
                                <div className="py-6">
                                    <h2 className="text-base font-bold">Contact Information</h2>

                                    <form action="#" className="mt-6">
                                        <div className="space-y-5">
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <label
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    htmlFor="address"
                                                >
                                                    Address
                                                </label>
                                                <input
                                                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    id="address"
                                                    value={userAddress}
                                                    onChange={(e) => setUserAddress(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                    onClick={handleGetLocation}
                                                    disabled={loading}
                                                >
                                                    {loading
                                                        ? "Fetching Location..."
                                                        : "Fetch My Location"}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutOne;
