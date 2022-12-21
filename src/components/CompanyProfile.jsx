import React from "react";
import banner from "../assets/images/banner.jpg";
import Responsive from "./Responsive";
export const CompanyProfile = () => {
  return (
    <>
      <div className="flex py-10 justify-center">
        <section
          className="min-h-screen md:w-[95vw] w-[90vw] flex md:flex-row flex-col bg-[#0b131f] rounded-3xl"
          data-aos="fade-right"
        >
          <div className="flex-1 flex md:text-left text-center md:ml-10 md:mt-8 py-28 flex-col m-5">
            <h1 className="md:text-7xl text-3xl font-bold text-[#d7e3ef]">
              COMPANY PROFILE
            </h1>
            <p className="text-lg text-[#d7e3ef] mt-4 flex flex-wrap">
              Shri Chari Wires, our flag ship group company, has been
              established in 1995. It is located at 23/7, Mathura Road,
              Sector-58, Fridabad-121004. It is 60 Km from Indira Gandhi
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
            <p className="text-lg text-[#d7e3ef] mt-4 flex flex-wrap">
              We are going through a massive expansion programme and just now
              commissioned two more Spherodising Bell Annealing furnaces. Apart
              from our most modern wire drawing plant, we have got Chemical &
              Metallurgical lab for verifying quality of incoming Steel & also
              ensuring quality of outgoing finish wires. Our expertise in making
              CHQ finish wires and its acceptance amongst our customers gives us
              an edge over our competitors.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex h-full justify-center items-center">
              <img
                src={banner}
                className="md:w-[500px] md:h-[300px] w-[300px] rounded-3xl border-4 border-[#d7e3ef]"
                alt="banner"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="w-[95vw] md:h-[35vh]">
        <div
          className="flex m-5 items-center justify-center flex-col"
          data-aos="fade-right"
        >
          <h3 className="md:text-5xl text-3xl text-[#0b131f] font-bold">
            Quality Assurance
          </h3>
          <p className="text-lg w-[80vw] mt-4 md:text-left text-center">
            Quality assurance starts right from the basic quality of wire rods
            i.e. from the raw material stage it self. We are very selective in
            sourcing of the raw material which basically decides the quality of
            end products.
          </p>
          <p className="text-lg w-[80vw] mt-4 md:text-left text-center">
            Our Q.A. team monitors the laid down systems and control methods
            involving inspection and maintenance of quality standards at each
            stage of manufacturing process. To make the process control
            effective, samples are drawn from the production lines to check for
            the tolerances, surface finish and physical & metallurgical
            properties. Our well equipped laboratory and inspection equipments
            ensures rigidness in our system & bring perfection in our process
            control which is so vital to match the end product specifications.
          </p>
        </div>
      </div>

      <div className="flex justify-center py-5">
        <div
          className="md:w-[95vw] w-[90vw] md:h-[55vh] flex md:flex-col flex-col bg-[#0b131f] justify-center items-center rounded-3xl"
          data-aos="fade-right"
        >
          <h3 className="text-[#d7e3ef] md:text-5xl text-3xl font-bold">
            Applications
          </h3>
          <h3 className="text-[#d7e3ef] mt-4 md:text-3xl text-xl text-center">
            Wires for General Applications:
          </h3>
          <p className="text-lg text-[#d7e3ef] w-[60vw] mt-4 md:text-left text-center">
            Shri Chari Wires has sophisticated manufacturing facilities for
            producing steel wires which have very diverse applications such as
            in automobile industry, engineering industry and general house hold
            applications. We have plans to make more variety of wires in future.
          </p>

          <h3 className="text-[#d7e3ef] md:text-3xl text-xl mt-4 md:text-left text-center">
            Wires for Cold Heading Applications:
          </h3>
          <p className="md:text-left text-center text-lg text-[#d7e3ef] mt-4 w-[60vw]">
            Shri Chari Wires is one of the leading manufacturer of cold heading
            quality. Wires for various applications : cold heading quality wires
            are used for manufacture of high tensile fasteners. Our CHQ wires
            are well accepted all over the country. Our customers are delighted
            to make critical fasteners with an ease by using our CHQ wires. We
            manufacture wires in grades like Low Carbon, Medium Carbon, SAE
            1541, Boron grades like 10B21, 15B25 & 15B41 and Alloy Steel Wires
            like SCM 435 & SCM 440 etc.{" "}
          </p>
        </div>
      </div>

      <div className="w-[95vw] md:h-[55vh] py-5">
        <div className="flex justify-center items-center md:flex-col flex-col text-[#0b131f]">
          <h3 className="text-xl md:text-left text-center ">
            Size Range: 1.80mm to 36.00mm diameter
          </h3>
          <h3 className="text-xl md:text-left text-center ">
            Size Tolerance : We produce wires in very close tolerances.
          </h3>

          <table
            className="mt-8 flex flex-col justify-center border-2 border-[#0b131f]"
            width="250px"
          >
            <thead className="text-xl bg-[#0b131f] text-[#d7e3ef]">
              <tr className="flex flex-row justify-center gap-10">
                <th>Wire Size</th>
                <th>Tolerance (mm)</th>
              </tr>
            </thead>

            <tbody>
              <tr className="flex flex-row justify-center gap-10 text-lg">
                <td>1.80 to 3.00</td>
                <td>± 0.025</td>
              </tr>
              <tr className="flex flex-row justify-center gap-10 text-lg">
                <td>3.00 to 6.00</td>
                <td>± 0.030</td>
              </tr>
              <tr className="flex flex-row justify-center gap-10 text-lg">
                <td>6.00 & above</td>
                <td>± 0.050</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center">
            <div
              className="w-[60vw] md:block hidden mt-16 ml-20 rounded-lg border-2 border-[#0b131f]"
              data-aos="fade-right"
            >
              <Responsive />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
