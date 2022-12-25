import React from "react";
import infra from "../assets/images/Group 12.png";
import Responsive from "./Responsive";
export const Infra = () => {
  return (
    <>
      <div className="flex py-10 justify-center">
        <section
          className="min-h-[60vh] md:w-[95vw] w-[90vw] flex md:flex-row flex-col bg-[#0b131f] rounded-3xl"
          data-aos="fade-right"
        >
          <div className="flex-1 flex md:text-left text-center md:ml-10 md:mt-8 py-28 flex-col m-5">
            <h1 className="md:text-7xl text-3xl font-bold text-[#d7e3ef]">
              INFRATRUCTURE
            </h1>
            <p className="text-lg text-[#d7e3ef] mt-4 flex flex-wrap">
              With Modern Technology and expert human resources, there is
              constant innovation and expansion in their product offerings:
            </p>
          </div>

          <div className="flex-1">
            <div className="flex h-full justify-center items-center">
              <img
                src={infra}
                className="md:w-[500px] md:h-[400px] w-[300px]"
                alt="banner"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="flex py-10 justify-center flex-col gap-14">
        <div className="flex justify-center items-center flex-col gap-5">
          <h3 className="text-[#0b131f] text-3xl text-center font-bold ">
            4 Acres of land
          </h3>
          <p className="text-[#0b131f] text-lg text-center">
            Their massive plant has the capacity of producing large output and
            will be soon going for capacity expansion due to market demand.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col gap-5">
          <h3 className="text-[#0b131f] text-3xl text-center font-bold flex justify-center ">
            Wire drawing machines
          </h3>
          <p className="text-[#0b131f] text-lg text-center flex justify-center" data-aos="fade-right">
            The latest wire drawing machines and systems have been incorporated
            which can produce wire sizes right from 1.2 mm to 28 mm adding a
            wide range to their product mix.
          </p>
          <div className="flex flex-row gap-14 justify-center items-center" data-aos="fade-right">
            <ul className="list-disc flex flex-col" role="list">
              <li>52100/EN31</li>
              <li>1541/EN8D</li>
              <li>10B21/15B25</li>
              <li>C1008/1010/1015</li>
              <li>MS/LC HB HHB</li>
            </ul>

            <ul className="list-disc flex flex-col" role="list">
              <li>52100/EN31</li>
              <li>1541/EN8D</li>
              <li>10B21/15B25</li>
              <li>C1008/1010/1015</li>
              <li>MS/LC HB HHB</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-5" data-aos="fade-right">
          <h3 className="text-[#0b131f] text-3xl text-center font-bold flex justify-center ">
            Pickling & Phosphating
          </h3>
          <p className="text-[#0b131f] w-[60vw] text-lg text-center flex justify-center">
            It is a process essential to remove imperfections from the surface
            of the wire rods to give good clean & rust-free wire & uniformly
            phosphated to facilitate better cold forging at our customer end.
          </p>
        </div>

        <div className="flex justify-center py-5">
          <div
            className="md:w-[95vw] w-[90vw] md:h-[85vh] flex md:flex-col flex-col bg-[#0b131f] justify-center items-center rounded-3xl"
            data-aos="fade-right"
          >
            <h3 className="text-[#d7e3ef] md:text-5xl text-center text-2xl py-3 font-bold">
              Spheriodise Bell Annealing
            </h3>
            <p className="text-lg text-[#d7e3ef] w-[60vw] mt-4 md:text-left text-center">
              This most critical process in making CHQ wires, is achieved by our
              very state of art ELECTRIC BELL TYPE ANNEALING FURNACES. The Wires
              undergo gradual heating & controlled cooling in an complete
              Vacuumised INERT ATMOSPHERE, in order to achieve the desired
              mechanical & metallurgical properties in the material to
              facilitate COLD FORGING & FORMING
            </p>

            <h3 className="text-[#d7e3ef] md:text-5xl text-center text-2xl py-3 font-bold">
              Quality Assurance & Control
            </h3>
            <p className="text-lg text-[#d7e3ef] w-[60vw] mt-4 md:text-left text-center flex flex-col gap-4">
              A team of professionals & highly experienced personnel take utmost
              responsibility to send the material as per the customer
              specifications. This is achieved by them through their experience
              & knowledge and the following infrastructure:
              <div className="flex flex-row gap-14 justify-center items-center">
                <ul className="list-disc flex flex-col" role="list">
                  <li>
                    Upset Testing machine: all wire rods & annealed wires are
                    checked for cracking through this machine.
                  </li>
                  <li>UTS m/c</li>
                  <li>Hardness Testing M/c</li>
                  <li>Metallurgical Microscope with camera</li>
                  <li>Phosphate coating testing</li>
                  <li>Fully equipped Chemical Lab.</li>
                </ul>
              </div>
            </p>

            <h3 className="text-[#d7e3ef] md:text-5xl text-center text-2xl py-3 font-bold">
              Packing and Despatch
            </h3>
            <p className="text-lg text-[#d7e3ef] w-[60vw] mt-4 md:text-left text-center flex flex-col gap-4">
              Prior to packing and dispatch, A provision for the finished coils
              to be dipped into protective rust preventive oil, is made as per
              customer needs to ensure full proof packing.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
            <div
              className="w-[60vw] md:block hidden mt-16 ml-20 rounded-lg border-2 border-[#0b131f]"
              data-aos="fade-right"
            >
              <Responsive />
            </div>
          </div>
      </div>
    </>
  );
};
