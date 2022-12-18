import React, {useState, useEffect} from "react";
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
        link: "/infratructure"
    },
    {
        name: "Products",
        link: "/products"
    },
    {
        name: "Plant & Machinery",
        link: "/plant_&_machinery"
    },
    {
        name: "Query",
        link: "/query"
    },
    {
        name: "Contact Us",
        link: "/contact_us"
    }

  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
        const nav = document.querySelector('nav')
        window.scrollY > 30 ? setSticky(true) : setSticky(false);
    })
})

  return (
    <div className="flex justify-center">
      <div className="fixed w-[90vw] rounded-tr-3xl rounded-tl-3xl h-[10vh]  bg-[#0b131f]">
        <div className="flex items-center justify-between">
          <div className="m-5">
            <img src={logo} className="md:w-[300px] w-[200px]" />
          </div>
          <div className="text-white md:block hidden px-7 py-2 font-medium rounded-bl-full cursor-pointer">
            <ul className="flex items-center gap-1 py-2 text-lg">
                {
                    menuLinks?.map((menu,i) =>(
                        <li key={i} className='px-6 hover:text-cyan-600'>
                            <Link to={menu?.link}>{menu?.name}</Link>
                        </li>
                    )) 
                }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
