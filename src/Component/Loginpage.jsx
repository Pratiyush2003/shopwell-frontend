import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartproduct } from "../app/getuserSlice";

const LoginPage = () => {
  const [password, setUserPassword] = useState("");
  const [email, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { allCartProduct } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const Loginhandle = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const res = await fetch('https://shopwell-backend.onrender.com/api/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    });

    const loginData = await res.json();
    if (loginData.error) {
      console.log(loginData.error);
    } else {
      navigate('/');
      localStorage.setItem('token', loginData.token);
      dispatch(cartproduct());
    }

    setUserPassword("");
    setUserEmail("");
    setEmailError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
          <p className="mt-2 text-gray-500">Login below to access your account</p>
        </div>
        <form onSubmit={Loginhandle} className="mt-6">
          <div className="relative mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="Email Address"
              className="peer w-full border-b-2 border-gray-300 px-0 py-2 bg-transparent placeholder-transparent focus:border-indigo-500 focus:outline-none"
              autoComplete="email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-0 -translate-y-3 transform text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Email Address
            </label>
            {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
          </div>
          <div className="relative mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="Password"
              className="peer w-full border-b-2 border-gray-300 px-0 py-2 bg-transparent placeholder-transparent focus:border-indigo-500 focus:outline-none"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-0 -translate-y-3 transform text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Password
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-3 py-4 text-white hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            Don't have an account yet?
            <Link to="/SignupPage" className="font-semibold text-indigo-500 hover:underline focus:outline-none focus:text-indigo-700">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
