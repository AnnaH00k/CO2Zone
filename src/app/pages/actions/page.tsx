import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function actionsPage() {
  return (
    <main>
      <MenuHeader />

      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-center text-4xl m-4  ">
        Combating Climate Change: Collective Actions for a Sustainable Future

        </h1>


        <div
          id="ActionIndividuals"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          What can Individuals do?
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Individual actions play a crucial role in mitigating the impact of climate change. Simple yet impactful steps include reducing energy consumption at home, opting for renewable energy sources, practicing sustainable transportation, such as biking or using public transport, minimizing water waste, and adopting eco-friendly habits like recycling and reducing single-use plastics. Additionally, individuals can advocate for environmental awareness and support initiatives that promote sustainability within their communities, fostering a culture of eco-consciousness and responsible consumption.
                </li>
                <li className="mb-4">
                On this website could be a calculator whwere individuals can properly calculate their own co2 emissions, gather points for planting or acting in a certain way, to reduce co2 emissions, kind of like a daily co2 emission tracker.  Let individuals set up their own co2 tracker for real time co2 emission data from their homes.              </li>
              </ul>
            </div>
          </div>
        </div>


        <div
          id="ActionCompanies"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          What can Companies do?
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Businesses have a significant responsibility to integrate sustainable practices into their operations. This can be achieved by implementing energy-efficient technologies, optimizing supply chains to reduce emissions, and adopting eco-friendly manufacturing processes. Companies can also invest in research and development for clean energy solutions, promote eco-friendly products, and engage in carbon offset initiatives. Embracing corporate social responsibility and incorporating environmental considerations into business strategies can not only reduce their carbon footprint but also contribute to building a greener and more sustainable economy.
                </li>
                <li className="mb-4">
                On this website could be a company specific co2 emission calculator. Tipps for optimising building efficiency and the introduction to stop greenwashing and share your companys data as a form of transparency marketing            </li>
              </ul>
            </div>
          </div>
        </div>


      
        <div
          id="ActionGovernments"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          What can governments do?       
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Governments play a critical role in setting policies and regulations that drive environmental protection and sustainable development. This includes implementing robust environmental standards, supporting renewable energy initiatives through incentives and subsidies, promoting green infrastructure projects, and enforcing regulations to limit harmful emissions from industries. Moreover, governments can invest in research and development for green technologies, prioritize sustainable urban planning, and foster international collaboration to address global environmental challenges. By taking proactive measures and fostering a conducive policy environment, governments can pave the way for a more sustainable and resilient future for all.
                </li>
                <li className="mb-4">
                Positive regulations and a plattform, where suggestions for governments can be made.   Secure democratic ballet box for research people want to be supported.
                 </li>
              </ul>
            </div>
          </div>
        </div>
         
      </div>
    </main>
  );
}
