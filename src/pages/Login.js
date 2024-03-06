import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {demoLogin, reset } from "../redux/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const [data, setData] = useState({
    user_email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  // for typing in inputs
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      // toast.success(message)
      navigate("/merchants");
      toast.success("Login Successiful");
    }
    //  reset is a function that we created to reset everything in the state after logging in successfully
    dispatch(reset());
  }, [user, isError, message, isSuccess, navigate, dispatch]);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // receiving data from the form and store it inside userdata
    const userData = {
      user_email: data.user_email,
      password: data.password,
    };
    //login is a function in authSlice  that we created using createAsyncThunk
    //we are passing our data as argument to this login function
     localStorage.setItem("user", JSON.stringify(userData));
    dispatch(demoLogin());
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-mint-cream max-w-[500px] shadow-lg p-5 rounded-lg w-[90%] md:w-[50%] block m-auto">
        <h1 className="text-3xl text-center mb-5 font-bold">Sign In</h1>
        {/* login form  */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={data.user_email}
              id="email"
              name="user_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Your Email..."
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              value={data.password}
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Your Password..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black w-full p-2.5 text-mint-cream rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't Have an Account? {/* link to register  */}
          <Link to="/register" className="text-royal-blue">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
