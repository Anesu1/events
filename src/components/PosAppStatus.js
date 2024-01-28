import React, { useState } from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

export default function PosAppStatus() {
  const [data, setData] = useState({
    merchant: "",
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
    <div className="bg-gray-100 max-w-[800px] p-20 py-10 rounded-lg w-[90%] md:w-[50%] block mt-10 m-auto">
      <h1 class="text-3xl text-center mb-5 font-bold">POS Application Status</h1>

      <form onSubmit={""}>
        <Input
          title="Merchant Name"
          value={data.merchant}
          type="text"
          inputId="merchant"
          name="merchant"
          placeholder="Merchant Here.."
          onChange={handleChange}
        />
        <div class="mb-5">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={data.status} onChange={handleChange} name="status" id="status" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full ring-1 ring-gray-700 peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900">
              Status
            </span>
          </label>
        </div>

        <Link to="/" className=" block ml-auto w-max">
          <button
            className={`bg-blue-500 hover:opacity-80 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
