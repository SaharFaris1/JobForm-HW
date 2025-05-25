import React from 'react'
import { Link } from "react-router";

const navBar = [
    { title: "Form",  path: "/form" },
    { title: "Answers",  path: "/dashboard" },
    { title: "",  path: "/dashboard" },
    { title: "",  path: "/form" },
   
  ];
  

function Nav() {
  return (
    <nav className="bg-blue-300 opacity-80 text-white h-16 flex items-center justify-between px-6 shadow-md border-b-2 sticky top-0 z-50">
    
    <div className="flex justify-around gap-10  items-center ">

      <div className="logo">
        <img
          src="/job-search.png"
          alt="Activision Logo"
          className="h-15"
        />
      </div>
  
    <ul className=" flex gap-10">
      {navBar.map((item, index) => (
        <li key={index} className="flex items-center cursor-pointer ">
          <Link
            to={item.path}
            className= "text-gray-800 hover:text-gray-300 transition font-medium "
          >
            {item.title}
          </Link>
         
        </li>
      ))}
    </ul>
    </div>
    
  </nav>
);
}

export default Nav