// EventForm.js
import React, {useEffect} from "react";
import Button from "../styled/Button";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { eventReset, addEvent } from "../redux/eventSlice"
const NewEvent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {events, isSuccess, isError,isLoading, message} = useSelector(state => state.events)

 
  const [data, setData] = useState({
    title: "",
    progress: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

    useEffect(() => {
      if (isError) {
        toast.error(message);
      }
      if (isSuccess) {
        // toast.success(message)
        navigate("/");
        toast.success("Event Added");
      }

      dispatch(eventReset());
    }, [events, isError, message, isSuccess, navigate, dispatch]);

    const handleSubmit = (e) => {
      e.preventDefault();
      
        const eventData = {
          title: data.title,
          progress: data.progress,
          date: data.date,
        };
        dispatch(addEvent(eventData));
      
    };

    
  
  
  return (
    <div>
      <h2>Add New Event</h2>

      <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Title
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={data.title}
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="New Event Title"
            required
          />
        </div>

        <div class="mb-5">
          <label
            for="progress"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Progress
          </label>
          <input
            type="number"
            id="progress"
            name="progress"
            onChange={handleChange}
            value={data.progress}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Progress"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="date"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={data.date}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Date"
            required
          />
        </div>
<div class="mb-5"><label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"  />
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label></div>


        <button
          type="submit"
          className="bg-blue-500 hover:opacity-80 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {isLoading ? "Adding..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default NewEvent;
