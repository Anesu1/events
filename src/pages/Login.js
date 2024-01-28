import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset, getUser } from "../redux/authSlice";
import { toast } from "react-toastify";

export default function Login() {
   const [data, setData] = useState({
     user_email: "",
     password: ""
   });
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const { user, isLoading, isError, message, isSuccess } = useSelector(
    //   (state) => state.auth
    // );

   const handleChange = (e) => {
     setData((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value,
     }));
   };

   
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess) {
  //     // toast.success(message)
  //     navigate("/");
  //     toast.success("Login Successiful");
  //   }

  //   dispatch(reset());
  // }, [user, isError, message, isSuccess, navigate, dispatch]);

  useEffect(() => {
    
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    

      const userData = {
        user_email: data.user_email,
        password: data.password,
      };
      dispatch(login(userData)) ;
      
    
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
   return (
     <div>
       <div className="bg-gray-100 max-w-[500px] p-5 rounded-lg w-[90%] md:w-[50%] block mt-10 m-auto">
         <h1 class="text-3xl text-center mb-5 font-bold">Sign In</h1>

         <form onSubmit={handleSubmit}>
           <div class="mb-5">
             <label
               for="title"
               class="block mb-2 text-sm font-medium text-gray-900 "
             >
               Email
             </label>
             <input
               type="text"
               onChange={handleChange}
               value={data.user_email}
               id="email"
               name="user_email"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
               placeholder="Your Email..."
               required
             />
           </div>
           <div class="mb-5">
             <label
               for="title"
               class="block mb-2 text-sm font-medium text-gray-900 "
             >
               Password
             </label>
             <input
               type="password"
               onChange={handleChange}
               value={data.password}
               id="password"
               name="password"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
               placeholder="Your Password..."
               required
             />
           </div>

           <button
             type="submit"
             className="bg-black w-full p-2.5 text-white rounded-lg"
           >
             Login
           </button>
         </form>
         <p className="text-center mt-4">
           Don't Have an Account?{" "}
           <Link to="/register" className="text-blue-400">
             Register
           </Link>
         </p>
       </div>
     </div>
   );
}
