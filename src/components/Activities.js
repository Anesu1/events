import React, { useState } from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

export default function Activities() {
  const [data, setData] = useState({
    activityName: "",
    activityDescription: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  return (
    <div className="bg-white max-w-[800px] p-20 py-10 rounded-lg w-[90%] lg:w-[50%] block mt-10 m-auto">
      <h1 class="text-3xl text-center mb-5 font-bold">Activities</h1>

      <form onSubmit={""}>
        <Input
          title="Activity Name"
          value={data.activity}
          type="text"
          inputId="activityName"
          name="activityName"
          placeholder="Activity Name Here.."
          onChange={handleChange}
        />
        <Input
          title="Date"
          value={data.date}
          type="date"
          inputId="date"
          name="date"
          placeholder="Your Date Here"
          onChange={handleChange}
        />
        <div class="mb-5">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Activity Description
          </label>
          <textarea
            id="activityDescription"
            name="activityDescription"
            handleChange={handleChange}
            value={data.activityDescription}
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
            placeholder="Write the description here..."
          ></textarea>
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
