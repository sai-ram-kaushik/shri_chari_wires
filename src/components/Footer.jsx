import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  const footerList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/company_profile",
    },
    {
      name: "Our Products",
      link: "/",
    },
    {
      name: "Applications",
      link: "/",
    },
    {
      name: "Certification of Registration",
      link: "/",
    },
    {
      name: "List of Intruments",
      link: "/",
    },
    {
      name: "Contact Us",
    },
  ];
  return (
    <div className="flex justify-center mt-16">
      <div className="w-[95vw] md:h-[10vh]  bg-[#0b131f] rounded-tr-3xl rounded-tl-3xl">
        <div className="flex justify-center ">
          <p className="text-white">Copyright &#169; 2011 Shri Chari Wires</p>
        </div>

        <div className="flex justify-center mt-4">
          <ul className="flex items-center justify-center gap-1 py-2 text-[18px] flex-wrap">
            {footerList?.map((footer, i) => (
              <li key={i} className="px-6 text-white hover:text-cyan-600">
                <Link to={footer?.link}>{footer?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
