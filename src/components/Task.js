import React, { useState } from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

export default function Task() {
  const [data, setData] = useState({
      taskName: "",
      taskId:"",
    priority:"",
    taskDescription: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  return (
    <div className="bg-white max-w-[800px] p-20 py-10 rounded-lg w-[95%] lg:w-[50%] block mt-10 m-auto">
      <h1 class="text-3xl text-center mb-5 font-bold">Task</h1>

      <form onSubmit={""}>
        <Input
          title="Task ID"
          value={data.taskId}
          type="text"
          inputId="taskId"
          name="taskId"
          placeholder="Task ID Here.."
          onChange={handleChange}
        />
        <Input
          title="Task Name"
          value={data.taskName}
          type="text"
          inputId="taskName"
          name="taskName"
          placeholder="Task Name Here.."
          onChange={handleChange}
        />

        <div class="mb-5">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Task Description
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            handleChange={handleChange}
            value={data.taskDescription}
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
            placeholder="Write the description here..."
          ></textarea>
        </div>
        <div class="mb-5">
          {" "}
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={data.priority}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-[#1B3562] focus:bg-[#1B3562] block w-full p-2.5"
          >
            <option selected>Choose priority</option>
            <option value="US">high</option>
            <option value="CA">middle</option>
            <option value="FR">low</option>
          </select>
        </div>

        <div class="mb-5">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={data.status}
              onChange={handleChange}
              name="status"
              id="status"
              class="sr-only peer"
            />
            <div class="w-11 h-6 bg-gray-200 rounded-full ring-1 ring-gray-700 peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1B3562]"></div>
            <span class="ms-3 text-sm font-medium text-gray-900">Status</span>
          </label>
        </div>

        <Link to="/" className=" block ml-auto w-max">
          <button
            className={`bg-[#1B3562] hover:opacity-80 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
