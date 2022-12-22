import React from "react";
import infra from '../assets/images/Group 12.png'
export const Infra = () => {
  return (
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
            With Modern Technology and expert human resources, there is constant
            innovation and expansion in their product offerings:
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
  );
};
