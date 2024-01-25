import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function co2InfoPage() {
  return (
    <main>
      <MenuHeader />

      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-center text-4xl  m-4  ">
          Understanding CO2: Its Impact and Monitoring
        </h1>

        <div
          id="WhatIsCo2"
          className="flex flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-2xl mb-4 font-bold">
            What is CO2?
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li>
                  <strong className="text-blueExtraLight">
                    Chemical Composition:
                  </strong>{" "}
                  CO2 is a chemical compound composed of two oxygen atoms bonded
                  to a single carbon atom.
                </li>
                <li>
                  <strong className="text-blueExtraLight">
                    Natural Occurrence:
                  </strong>{" "}
                  It is a naturally occurring gas in Earth's atmosphere,
                  constituting approximately 0.04% (400 parts per million) of
                  the atmosphere's composition. This vital greenhouse gas plays
                  a fundamental role in maintaining the planet's temperature by
                  trapping outgoing infrared radiation, thus preventing
                  excessive heat from escaping into space. It is released by
                  decomposition, methane oxidation, volcanic activity, wildfires
                  ocean release, and respiration in living organisms.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="WhatDoesCo2Do"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            What does CO2 do?
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  <h1 className="text-blueLight text-2xl font-bold">
                    In the Air
                  </h1>
                  <strong className="text-blueExtraLight">
                    Reaction with Sunlight:
                  </strong>{" "}
                  In the atmosphere, CO2 does not undergo direct chemical
                  reactions with air components. However, it plays a crucial
                  role in the greenhouse effect. Sunlight passes through the
                  atmosphere and reaches the Earth's surface. The Earth then
                  emits infrared radiation, and CO2 in the atmosphere absorbs
                  and re-emits some of this radiation, trapping heat and warming
                  the planet.
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <h1 className="text-blueLight text-2xl font-bold">
                        With Plants & Earth
                      </h1>
                      <strong className="text-blueExtraLight">
                        Photosynthesis:
                      </strong>{" "}
                      Plants use CO2 during photosynthesis to produce glucose
                      and oxygen. In the presence of sunlight, chlorophyll in
                      plant cells captures CO2 from the air and water from the
                      soil, converting them into glucose and oxygen.
                    </div>

                    <img
                      className="rounded-xl w-full sm:w-[30%] h-auto mt-2 mb-4 sm:m-4"
                      src="/photosynthesis.png"
                      alt="photosynthesis"
                    />
                  </div>
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row-reverse">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <h1 className="text-blueLight text-2xl font-bold">
                        With Water
                      </h1>
                      <strong className="text-blueExtraLight">
                        Carbonation:
                      </strong>{" "}
                      CO2 dissolves in water to form carbonic acid (H2CO3). This
                      reaction is reversible, and carbonic acid can dissociate
                      back into CO2 and water. Oceans act as a sink for CO2,
                      absorbing a significant amount, but this process can lead
                      to ocean acidification.
                    </div>

                    <img
                      className="rounded-xl w-full sm:w-[30%] h-auto mt-2 mb-4 sm:m-4"
                      src="/carbonation.png"
                      alt="carbonation"
                    />
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <h1 className="text-blueLight text-2xl font-bold">
                        With Fire
                      </h1>
                      <strong className="text-blueExtraLight">
                        Fire Extinguishing:
                      </strong>{" "}
                      CO2 can be used in fire extinguishers. In the presence of
                      a fire, the introduction of CO2 displaces oxygen, which is
                      essential for combustion. By reducing the concentration of
                      oxygen, CO2 helps suppress the fire without supporting its
                      continuation.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="HowIsItMonitored"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            How is it monitored?
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  <strong className="text-blueExtraLight">
                    Ground-Based Monitoring Stations:
                  </strong>{" "}
                  Ground-based stations are strategically located worldwide to
                  measure CO2 levels in the atmosphere. These stations use
                  high-precision instruments, such as gas analyzers, to sample
                  air and quantify the concentration of CO2. Mauna Loa
                  Observatory in Hawaii is one well-known location for such
                  measurements.
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Aircraft-Based Measurements:
                      </strong>{" "}
                      Aircraft equipped with CO2 sensors are used to collect air
                      samples at different altitudes. This allows scientists to
                      study vertical profiles of CO2 concentrations and
                      understand variations in different layers of the
                      atmosphere.
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col mb-4 sm:flex-row-reverse">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Satellite Observations:
                      </strong>{" "}
                      Satellites equipped with remote sensing instruments can
                      monitor CO2 levels from space. These satellites can
                      provide a global perspective on CO2 distribution and help
                      identify regional sources and sinks. NASA's Orbiting
                      Carbon Observatory (OCO) is an example of a satellite
                      dedicated to monitoring CO2 levels.
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Ocean Buoy Systems:
                      </strong>{" "}
                      Ocean buoy systems equipped with CO2 sensors are deployed
                      in marine environments to measure CO2 levels in surface
                      waters. This helps scientists understand the role of the
                      oceans in absorbing and releasing CO2.
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Mobile Monitoring:{" "}
                      </strong>{" "}
                      Mobile platforms, such as cars, airplanes, and ships, can
                      carry CO2 monitoring equipment to study localized
                      variations. This is particularly useful for understanding
                      emissions from specific regions or point sources.
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Flux Towers:{" "}
                      </strong>{" "}
                      Flux towers are tall structures equipped with sensors that
                      measure the exchange of CO2 between the surface and the
                      atmosphere. These towers are often located in ecosystems
                      like forests and croplands to study carbon flux.
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Ice Core Analysis:
                      </strong>{" "}
                      Ice cores from polar regions contain trapped air bubbles
                      that provide historical records of past atmospheric CO2
                      concentrations. Analyzing these cores helps scientists
                      reconstruct CO2 levels over thousands of years.
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col sm:flex-col items-center sm:items-start">
                      <strong className="text-blueExtraLight">
                        Mauna Loa Keeling Curve:
                      </strong>{" "}
                      The Mauna Loa Observatory in Hawaii has been monitoring
                      atmospheric CO2 since the late 1950s, providing the iconic
                      Keeling Curve. This continuous record illustrates the rise
                      in CO2 levels over time and is a fundamental dataset for
                      climate scientists.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="CurrentResearch"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            Current research on CO2 Emissions
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  Researchers worldwide are actively engaged in studying the
                  sources, impacts, and potential solutions for CO2 emissions.
                  This includes exploring alternative energy sources, promoting
                  sustainable practices in various industries, and developing
                  technologies for capturing and storing CO2. Additionally,
                  studies are focused on understanding the long-term
                  consequences of elevated CO2 levels on biodiversity,
                  ecosystems, and human health, aiming to inform policymakers
                  and the public about the urgency of taking collective action
                  to curb CO2 emissions and limit global warming.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="OtherInfluences"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            What else influences our Environment ?
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  Apart from CO2 emissions, various other factors significantly
                  impact the environment. These include pollutants such as
                  methane, nitrous oxide, and other greenhouse gases, as well as
                  deforestation, industrial waste, and the overexploitation of
                  natural resources. Additionally, human activities like
                  urbanization, agriculture, and transportation contribute to
                  air, water, and soil pollution, leading to biodiversity loss,
                  habitat destruction, and negative health consequences for both
                  humans and wildlife. Understanding and addressing these
                  interconnected environmental issues are crucial for ensuring a
                  sustainable and healthy planet for future generations.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="CO2Equivalents"
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
            CO2 Equivalents
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                  CO2 equivalents (CO2e) are a metric used to compare the global
                  warming potential of various greenhouse gases to that of CO2
                  over a specified timeframe. This metric enables scientists and
                  policymakers to assess the overall impact of different
                  greenhouse gases on climate change. By converting the
                  emissions of other greenhouse gases into CO2 equivalents, it
                  becomes easier to evaluate and compare the relative
                  contributions of different gases to global warming,
                  facilitating the development of effective mitigation
                  strategies and policies to reduce overall greenhouse gas
                  emissions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
