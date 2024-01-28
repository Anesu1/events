import React from 'react';
import { Link} from "react-router-dom"

export default function Button({color, text, page}) {
  return (
    <Link to={page}>
    <button
      className={`bg-blue-500 hover:opacity-80 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
    >
      {text}
    </button></Link>
  );
}
