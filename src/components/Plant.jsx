import React from "react";

export const Plant = () => {
  return (
    <div className="flex py-10 justify-center">
      <section
        className="min-h-screen md:w-[95vw] w-[90vw] flex md:flex-col flex-col bg-[#0b131f] rounded-3xl"
        data-aos="fade-right"
      >
        <div className="flex md:text-left text-center items-center md:ml-10 md:mt-4 py-28 flex-col m-5 gap-5">
          <h1 className="md:text-7xl text-3xl font-bold text-[#d7e3ef]">
            List Of Instruments
          </h1>
          <h3 className="text-[#d7e3ef] text-2xl">
            Wire Drawing of Ferrous & Nonferrous Material
          </h3>
        </div>

        <div className="justify-center items-center mx-6 flex text-gray-600 w-[95vw]">
            <table className="md:mx-6 mx-[-8px]">
              <thead>
                <tr>
                  <th className="text-3xl justify-start text-[#d7e3ef]">
                    LIST OF INSTRUMENTS
                  </th>
                </tr>
                <tr>
                  <th className="text-2xl">
                  1- Chemical Testing
                  </th>
                </tr>
                <tr className="text-2xl">
                  <th>Topics</th>
                </tr>
              </thead>
              <tbody>
                <tr className="justify-start text-lg">
                  <td>
                    <ul role="list" className="list-disc pl-5 text-slate-500">
                      <li>Case-Based Reasoning and Learning</li>
                      <li>Classification and Clustering</li>
                      <li>Deep Learning</li>
                      <li>Inductive Learning</li>
                      <li>Inference Rule Learning</li>
                      <li>Learning and Adaptive control</li>
                      <li>Real Time Event Learning and Detection</li>
                      <li>Natural Language Processing</li>
                      <li>Similarity Measures and Learning of Similarity</li>
                      <li>
                        Statistical and Evolutionary Learning Soft Computing
                      </li>
                      <li>Image Processing and Computer Vision</li>
                      <li>Internet of Things</li>
                      <li>Virtual Reality and Augmented Reality</li>
                      <li>Robotics</li>
                      <li>Annotation of Media content</li>
                      <li>Data Handling and Pre-processing</li>
                      <li>Pattern Recognitions</li>
                      <li>Feature Engineering and Feature Selection</li>
                      <li>Computational Biology &amp; Bioinformatics</li>
                      <li>Data Modeling &amp; Semantic Engineering</li>
                      <li>
                        High Performance Scientific/Engineering/ Commercial
                        Applications
                      </li>
                      <li>Infoscience &amp; Computational Informatics</li>
                      <li>Information Network Analytics</li>
                      <li>Data Science Techniques for Handling</li>
                      <li>Epidemic and Pandemic Situations</li>
                      <li>Time Series and Sequential Pattern Mining</li>
                    </ul>
                  </td>
                  {/* <td><b>-</b></td>
              <td><b>-</b></td> */}
                </tr>
              </tbody>
            </table>
          </div>
      </section>
    </div>
  );
};
