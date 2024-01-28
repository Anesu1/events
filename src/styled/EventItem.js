import React from 'react'
import Button from './Button';
import {useState} from 'react'

export default function EventItem({ task, getData }) {
  const [loading, setLoading] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const deleteEvent = async(e) => {
    
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/delete_event/${task.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res);
      if (res.status === 200) {
        getData()
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="m-5 mx-20 bg-gray-300 p-5 rounded">
      <div className="infocontainer">
        <h1>{task.title}</h1>
        <p>{formatDate(task.date)}</p>
        <div className="flex gap-5">
          <Button text="Edit" color="gray" page={`event/${task.id}`} />
          <button
            onClick={deleteEvent}
            className={`bg-red-500 hover:opacity-80 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >Delete</button>
         
        </div>
      </div>
    </div>
  );
}
