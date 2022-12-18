import React, { useEffect } from "react";
import banner from "../assets/images/hero.jpg";
import product1 from "../assets/images/alloySteelWire.webp";
import product2 from "../assets/images/nonAlloy.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Responsive from "./Responsive";

export const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex py-10 justify-center">
        <section
          className="min-h-screen md:w-[95vw] w-[90vw] flex md:flex-row flex-col bg-[#0b131f] rounded-2xl"
          data-aos="fade-right"
        >
          <div className="flex-1 flex md:text-left text-center md:ml-10 md:mt-20 py-28 flex-col m-5">
            <h1 className="md:text-7xl text-3xl font-bold text-[#d7e3ef]">
              WELCOME TO
              <p>SHRI CHARI WIRE</p>
            </h1>
            <p className="text-lg text-[#d7e3ef] mt-4 flex flex-wrap">
              Shri Chari Wires, our flag ship group company, has been
              established in 1995. It is located at 23/7, Mathura Road,
              Sector-58, Faridabad-121004. It is 60 Km from Indira Gandhi
              International airport & 50 Kms form New Delhi Railway Station.
            </p>
            <p className="text-lg text-[#d7e3ef] mt-4 flex flex-wrap">
              Shri Chari Wires now having Annealing capacity of 15000 MT per
              year, Drawing Capacity of 20000 MT per year and Size Range 1.80 to
              36.00 MM, produces world class steel wires in various grades like
              low carbon, medium carbon, C-Mn Steel, Boron Steels and Alloy
              Steel Wires. These steel wires are manufactured to suit varied
              needs of engineering, automobile & allied industries.
            </p>
          </div>
          
          <div className="flex-1">
            <div className="flex h-full">
              <img
                src={banner}
                className="md:w-[500px] h-[300px] w-[300px] mt-56 md:ml-32 rounded-3xl border-4 border-[#d7e3ef]"
                alt="banner"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#d7e3ef] w-full md:h-[70vh]">
        <div
          className="flex flex-col m-5 items-center justify-center"
          data-aos="fade-right"
        >
          <h2 className="md:text-5xl text-3xl md:text-center text-center font-bold m-5 text-[#0b131f]">
            Our Products
          </h2>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10 mt-8">
            <div className="flex flex-col gap-4 text-center">
              <img
                src={product1}
                className="md:w-[200px] w-[150px] rounded-full border-4 border-[#0b131f]"
                alt="product-1"
              />
              <Link to="/alloy_steel_wire" className="text-lg font-semibold">
                Allow Steel Wires
              </Link>
            </div>

            <div className="flex flex-col gap-4 text-center">
              <img
                src={product2}
                className="md:w-[200px] w-[150px] rounded-full border-4 border-[#0b131f]"
                alt="product-2"
              />
              <Link
                to="/non_alloy_steel_wire"
                className="text-lg font-semibold"
              >
                Non-Allow Steel Wires
              </Link>
            </div>
          </div>
        </div>

        <div
          className="w-[90vw] md:block hidden mt-16 ml-20 rounded-lg border-2 border-[#0b131f]"
          data-aos="fade-right"
        >
          <Responsive />
        </div>
      </div>
    </>
  );
};
