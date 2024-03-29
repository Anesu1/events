import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { demoLogout, reset } from "../redux/authSlice";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { FaBuildingUser } from "react-icons/fa6";
import { LuFileTerminal } from "react-icons/lu";
import { toast } from "react-toastify";
import { TbLogout2 } from "react-icons/tb";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const {user} = useSelector((state)=> state.auth)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const dispatch = useDispatch();

 

  

  useEffect(() => {
    
    if (!user) {
      dispatch(reset())
      toast.success("Logout Successiful");
    }
   
  }, [user, dispatch]);

  

  const handleLogout =  () => {
    dispatch(demoLogout()); 
    localStorage.removeItem("user") 
    localStorage.removeItem("events");
  };
  return (
    <div>
      <section className="md:p-0 md:flex">
        <div className="p-[5%] md:p-0">
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            onClick={toggleSidebar}
            className="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          <Sidebar
            aria-label="Sidebar with logo branding example"
            className={`bg-white fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:relative bg-sidebar`}
          >
            <Sidebar.Logo href="#" img="" imgAlt="" className="flex items-center justify-center">
              <img src="/logo.png" className="mt-5 w-[100px] block" alt="" />
            </Sidebar.Logo>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <NavLink
                  to="/events"
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) => {
                    return isActive
                      ? "active bg-gray-500 text-white flex items-center p-2 text-base font-normal  bg-black rounded-lg hover:bg-gray-500 hover:text-white transition  group"
                      : "text-gray-800 flex items-center p-2 text-base font-normal  rounded-lg hover:bg-gray hover:text-[#ffffff] transition  group";
                  }}
                >
                  <FaBuildingUser className="w-6 h-6 text-gray-400 transition duration-75 text-grape " />
                  <span className={` ml-3`}>Events</span>
                </NavLink>

                <NavLink
                  to="/calendar"
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) => {
                    return isActive
                      ? "active bg-gray-500 text-white flex items-center p-2 text-base font-normal bg-black rounded-lg hover:bg-gray-500 hover:text-white transition  group"
                      : "text-gray-800 flex items-center p-2 text-base font-normal  rounded-lg hover:bg-gray hover:text-[#ffffff] transition  group";
                  }}
                >
                  <LuFileTerminal className="w-6 h-6 text-gray-400 transition duration-75  text-grape" />
                  <span className="ml-3">Calendar</span>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-gray-800 flex items-center p-2 text-base font-normal  rounded-lg hover:bg-gray hover:text-[#ffffff] w-full transition  group"
                >
                  <TbLogout2 className="w-6 h-6 text-gray-400 transition duration-75  text-grape" />
                  <span className="ml-3">Logout</span>
                </button>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div
          className={
            isSidebarOpen
              ? " flex-1 background-space"
              : "flex-1 bg-[#F9FAFB] transition"
          }
          onClick={() => setIsSidebarOpen(false)}
        >
          <div className="absolute right-0 w-['max-content'] md:relative p-5 px-10 md:shadow top-0 md:left-0 md:w-full bg-white">
            <h3 className="text-black text-xl lg:text-4xl">
              Events App
            </h3>
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
