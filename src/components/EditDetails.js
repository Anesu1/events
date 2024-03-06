import React, { useState, useEffect } from "react";
import Input from "../styled/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {  editEvent, reset } from "../redux/eventSlice";
import { toast } from "react-toastify";

export default function EditDetails() {


    const { id } = useParams();
    const { isSuccess, events } = useSelector((state) => state.events)
    const event = events.find((event) => event.id === parseInt(id));
    const [data, setData] = useState({
        eventName: event.eventName,
        description: event.description,
        location: event.location,
        date: event.date,
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Event updated successfully");

            navigate('/events');
            dispatch(reset());
        }

    }, [isSuccess, navigate, dispatch])


    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { ...data, id: event.id }
        try {
            dispatch(editEvent(updatedData));
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="bg-[#ffffff] max-w-[1300px] p-5  md:p-20 py-10 rounded-lg w-[95%] relative block mt-10 m-auto">
            <h1 className="text-3xl text-center mb-5 font-bold">Edit  {event.eventName}</h1>
            <Link
                to="/events"
                className="text-royal-blue absolute top-0 md:top-5 left-5 flex items-center gap-3"
            >
                <FaArrowLeft /> Go Back
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="md:flex gap-20 flex-wrap">
                    <div className="flex-1">

                        <div className="mt-10">
                            <div className="flex flex-col">

                                <div className="md:flex w-full gap-10">
                                    <Input
                                        title="Event Name"
                                        value={data.eventName}
                                        type="text"
                                        inputId="eventName"
                                        name="eventName"
                                        placeholder="Event Name"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        title="Date"
                                        value={data.date}
                                        type="date"
                                        inputId="date"
                                        name="date"
                                        placeholder="Date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <Input
                            title="Location"
                            value={data.location}
                            type="text"
                            inputId="location"
                            name="location"
                            placeholder="Location"
                            onChange={handleChange}

                        />
                        <div className="mb-5 w-full">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
                                Description
                            </label>
                            <textarea
                                type="text"
                                id="description"
                                value={data.description}
                                name="description"
                                rows={8}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                                placeholder="Description"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className={`bg-grape block ml-auto hover:opacity-80 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
