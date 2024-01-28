import React from "react";
import MenuHeader from "../../components/menuHeader";

export default function interestingPage() {
  return (
    <main>
      <MenuHeader />
      <div className=" mt-[5vh] flex flex-col justify-center items-center">
        <h1 className="text-blueExtraLight text-center text-4xl  m-4  ">
        Addressing Climate Change: Global Strategies and Emerging Solutions
        </h1>



        <div  id="CooperationOnClimateChange" className="h-[5vh]"/>

        <div
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          Global Cooperation on Climate Change
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Global cooperation is imperative in addressing the complex challenges of climate change. It involves collaboration among nations, international organizations, and stakeholders to develop and implement comprehensive strategies for mitigating greenhouse gas emissions and adapting to the impacts of climate change. Through initiatives such as the Paris Agreement, countries commit to collective efforts to limit global temperature rise, foster sustainable development, and support vulnerable communities in adapting to climate-related challenges. International cooperation fosters knowledge sharing, technology transfer, and the mobilization of resources to tackle climate change on a global scale.
                </li>
              </ul>
            </div>
          </div>
        </div>



        <div  id="EmissionTradingSchemes" className="h-[5vh]"/>


        <div
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          Emission Trading Schemes
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Emission trading schemes (ETS) are market-based mechanisms designed to reduce greenhouse gas emissions by setting a cap on total emissions and allowing the trading of emission permits among companies. By creating a financial incentive for reducing emissions, ETS encourages businesses to invest in cleaner technologies and practices. This approach promotes economic efficiency while fostering innovation in emissions reduction strategies, ultimately contributing to the overall goal of curbing global greenhouse gas emissions and combating climate change.                </li>
              </ul>
            </div>
          </div>
        </div>



        <div  id="Geoengineering" className="h-[5vh]"/>


        <div
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          Geoengineering solutions? 
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Geoengineering solutions refer to deliberate large-scale interventions in the Earth's climate system to counteract the effects of global warming. These approaches include methods such as solar radiation management and carbon dioxide removal. While some view geoengineering as a potential last-resort option, it raises ethical, environmental, and geopolitical concerns due to its potential unintended consequences and uncertainties. Research into geoengineering solutions continues, accompanied by ongoing discussions on their potential risks and benefits, emphasizing the importance of comprehensive risk assessment and global governance frameworks. </li>
              </ul>
            </div>
          </div>
        </div>

        <div  id="ClimateChangeDenial" className="h-[5vh]"/>
        <div
          className="flex m-5 flex-col items-center justify-center w-[80vw] p-8 bg-blueExtraDark rounded-lg"
        >
          <h1 className="text-blueExtraLight text-3xl mb-4 font-bold">
          Climate Change Denial
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="text-blueLight text-lg">
              <ul>
                <li className="mb-4">
                Climate change denial refers to the dismissal or refusal to accept scientific evidence of anthropogenic climate change and its potential consequences. Despite a strong scientific consensus on the reality and urgency of climate change, denial persists in some circles, often driven by ideological, political, or economic interests. Addressing climate change denial requires effective science communication, public education, and the promotion of evidence-based policymaking. Encouraging open dialogue and understanding the nuances of public perception can help bridge the gap and foster a collective understanding of the need for climate action and sustainable environmental stewardship.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
