import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Company Profile",
      link: "/company_profile",
    },
    {
      name: "Infratructure",
      link: "/infratructure",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Plant & Machinery",
      link: "/plant_&_machinery",
    },
    {
      name: "Query",
      link: "/query",
    },
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <div className="flex justify-center">
      <nav
        className={`fixed top-0 z-[999] md:w-[95vw] w-[90vw] h-[10vh] flex justify-center bg-[#0b131f] rounded-br-3xl rounded-bl-3xl ${
          sticky ? "bg-[#0b131f] text-white" : "text-white"
        }`}
      >
        <div className="flex item-center justify-between">
          <div className="mx-7">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="md:w-[350px] w-[250px] md:mt-2 mt-4"
              />
            </Link>
          </div>
          <div
            className={` ${
              sticky ? "md:bg-white/0 bg-[#0b131f]" : "bg-[#0b131f]"
            } text-gray-900 md:block hidden px-7 py-2 font-medium `}
          >
            <ul className="flex items-center justify-center gap-1 py-2 text-[18px]">
              {menuLinks?.map((menu, i) => (
                <li key={i} className="px-6 text-white hover:text-cyan-600">
                  <Link to={menu?.link}>{menu?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`z-[999] ${
              open ? "text-gray-900" : "text-gray-800"
            } text-3xl md:hidden m-5`}
          >
            <CgMenuRight />
          </div>
          <div
            className={`md:hidden text-gray-900 absolute w-2/2 h-screen px-3 py-2 font-medium bg-white top-0  duration-1000 ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
              {menuLinks?.map((menu, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <Link to={menu?.link}>{menu?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
};
