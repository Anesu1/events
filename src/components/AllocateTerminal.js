import React, { useState } from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

export default function AllocateTerminal() {
  const [data, setData] = useState({
    merchant: "",
    terminals: "",
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
      <h1 class="text-3xl text-center mb-5 font-bold">Allocate Terminals</h1>

      <form onSubmit={""}>
        <Input
          title="Merchant"
          value={data.merchant}
          type="text"
          inputId="merchant"
          name="merchant"
          placeholder="Merchant Here.."
          onChange={handleChange}
        />
        <Input
          title="Terminals"
          value={data.terminals}
          type="text"
          inputId="terminals"
          name="terminals"
          placeholder="Terminals..."
          onChange={handleChange}
        />

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
