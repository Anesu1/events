import React, { useState } from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

export default function PosMachine() {
  const [data, setData] = useState({
      posSerial: "",
      deviceName: "",
      deviceType: "",
        issuer:"",
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
      <h1 class="text-3xl text-center mb-5 font-bold">POS Machine</h1>

      <form onSubmit={""}>
        <Input
          title="Pos Serial"
          value={data.posSerial}
          type="text"
          inputId="posSerial"
          name="posSerial"
          placeholder="POS Serial Number Here.."
          onChange={handleChange}
        />
        <Input
          title="Device Name"
          value={data.deviceName}
          type="text"
          inputId="deviceName"
          name="deviceName"
          placeholder="Device Name Here.."
          onChange={handleChange}
        />
        <div class="mb-5">
          {" "}
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Device Type
          </label>
          <select
            id="deviceType"
            value={data.deviceType}
            onChange={handleChange}
            name="deviceType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose device type</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <Input
          title="Issuer"
          value={data.issuer}
          type="text"
          inputId="issuer"
          name="issuer"
          placeholder="Issuer Name"
          onChange={handleChange}
        />

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
