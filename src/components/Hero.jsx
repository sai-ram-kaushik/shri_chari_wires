import React from "react";
import banner from "../assets/images/hero.jpg";
import product1 from "../assets/images/alloySteelWire.webp";
import product2 from "../assets/images/nonAlloy.jpg";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <>
      <section className="min-h-screen flex py-10 md:flex-row flex-col items-center">
        <div className="flex-1 flex md:text-left text-center md:ml-10 md:mt-5 mt-10 flex-col m-5">
          <h1 className="md:text-7xl text-3xl font-bold text-[#d7e3ef]">
            Welcome to
            <p>Shri Chari Wires</p>
          </h1>
          <p className="text-lg text-[#d7e3ef] mt-4">
            Shri Chari Wires, our flag ship group company, has been established
            in 1995. It is located at 23/7, Mathura Road, Sector-58,
            Faridabad-121004. It is 60 Km from Indira Gandhi International
            airport & 50 Kms form New Delhi Railway Station.
          </p>
          <p className="text-lg text-[#d7e3ef] mt-4">
            Shri Chari Wires now having Annealing capacity of 15000 MT per year,
            Drawing Capacity of 20000 MT per year and Size Range 1.80 to 36.00
            MM, produces world class steel wires in various grades like low
            carbon, medium carbon, C-Mn Steel, Boron Steels and Alloy Steel
            Wires. These steel wires are manufactured to suit varied needs of
            engineering, automobile & allied industries.
          </p>
        </div>
        <div className="flex-1">
          <div className="flex h-full">
            <img
              src={banner}
              className="md:w-[600px] w-[300px] md:ml-20 rounded-3xl border-4 border-[#d7e3ef]"
            />
          </div>
        </div>
      </section>

      <div className="bg-[#d7e3ef] w-full md:h-[50vh] ">
        <div className="flex flex-col m-5 items-center justify-center">
          <h2 className="md:text-5xl text-3xl md:text-center text-center font-bold m-5 ">Our Products</h2>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10 mt-8">
            <div className="flex flex-col gap-4 text-center">
              <img
                src={product1}
                className="md:w-[200px] w-[150px] rounded-full border-4 border-[#0b131f]"
              />
              <Link to="/alloy_steel_wire" className="text-lg font-semibold">Allow Steel Wires</Link>
            </div>

            <div className="flex flex-col gap-4 text-center">
              <img
                src={product2}
                className="md:w-[200px] w-[150px] rounded-full border-4 border-[#0b131f]"
              />
              <Link to="/non_alloy_steel_wire" className="text-lg font-semibold">Non-Allow Steel Wires</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
