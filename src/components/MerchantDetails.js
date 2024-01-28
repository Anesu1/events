import React,{useState} from "react";
import Input from "../styled/Input";
import Button from "../styled/Button";
import { Link } from "react-router-dom";

export default function MerchantDetails() {
    const [data, setData] = useState({
      merchantName: "",
        natureOfBusiness: "",
        contactPerson: "",
        mobileNumber: "",
        businnesLocation: "", 
        commission:"",
        usdAccount:"",
        zwlAccount: "",
        justification: "",
        numberOfPosMachines: "",
      kycFile:"",
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
    <div className="bg-white max-w-[1300px] p-5  md:p-20 py-10 rounded-lg w-[95%]  block mt-10 m-auto">
      <h1 class="text-3xl text-center mb-5 font-bold">Mechant Details</h1>

      <form onSubmit={""}>
        <div className="md:flex gap-20 flex-wrap">
          <div className="flex-[0.5]">
            <Input
              title="Merchant Name"
              value={data.merchantName}
              type="text"
              inputId="merchantName"
              name="merchantName"
              placeholder="Merchant Name Here.."
              onChange={handleChange}
            />
            <Input
              title="Nature Of Business"
              value={data.natureOfBusiness}
              type="text"
              inputId="natureOfBusiness"
              name="natureOfBusiness"
              placeholder="What is your Nature Of Business?"
              onChange={handleChange}
            />
            <Input
              title="Contact Person"
              value={data.contactPerson}
              type="text"
              inputId="contactPerson"
              name="contactPerson"
              placeholder="Contact Person"
              onChange={handleChange}
            />
            <Input
              title="Mobile Number"
              value={data.mobileNumber}
              type="number"
              inputId="mobileNumber"
              name="mobileNumber"
              placeholder="Your Mobile Number Here"
              onChange={handleChange}
            />
            <Input
              title="Business Location"
              value={data.businnesLocation}
              type="text"
              inputId="businessLocation"
              name="businessLocation"
              placeholder="Your Business Location"
              onChange={handleChange}
            />
            <Input
              title="Commission"
              value={data.commission}
              type="text"
              inputId="commission"
              name="commission"
              placeholder="Your Commission"
              onChange={handleChange}
            />
          </div>
          <div className="flex-[0.5]">
            <Input
              title="USD Account"
              value={data.usdAccount}
              type="text"
              inputId="usdAccount"
              name="usdAccount"
              placeholder="USD Account Number"
              onChange={handleChange}
            />
            <Input
              title="ZWL Account"
              value={data.zwlAccount}
              type="text"
              inputId="zwlAccount"
              name="zwlAccount"
              placeholder="ZWL Account Number"
              onChange={handleChange}
            />
            <Input
              title="Justification"
              value={data.justification}
              type="text"
              inputId="justification"
              name="justification"
              placeholder="Your Justification"
              onChange={handleChange}
            />
            <Input
              title="Number of POS Machines"
              value={data.numberOfPosMachines}
              type="number"
              inputId="numberOfPosMachines"
              name="numberOfPosMachines"
              placeholder="How Many POS Machines?"
              onChange={handleChange}
            />
            <Input
              title="KYC File"
              value={data.kycFile}
              type="file"
              inputId="kycFile"
              name="kycFile"
              placeholder=""
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
          </div>
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
