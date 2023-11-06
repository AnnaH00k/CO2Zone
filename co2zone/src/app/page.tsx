import Image from "next/image";
import MenuHeader from "./components/menuHeader";

export default function Home() {
  return (
    <>
      <MenuHeader />

      <main>
        <div className=" mt-[5vh] flex flex-col justify-center items-center">
          <div className="w-[40vw]">
            <img src="/CO2zoneLogo.png" alt="logo" width="100%" />
          </div>
          <h1 className="flex hyphens-auto text-center text-blueExtraLight text-lg sm:text-4xl m-4 ">
            Advancing Environmental Consciousness, Together!
          </h1>
        </div>

        <div className="justify-center align-center flex items-center w-[100vw] mt-[3vh]">
          <section className="mt-4 w-[80vw]">
            <h2 className="text-lg sm:text-4xl align-center flex justify-center p-3  text-blueDark bg-blueExtraLight">
              CO2-Emissionsübersicht
            </h2>
            <div className="list-group-item mb-0">
              <table className="bg-blueLight w-[80vw] text-blueExtraDark text-left text-sm sm:text-xl ">
                <thead>
                  <tr className="border border-blueExtraLight border-solid border-1">
                    <th className="border border-blueExtraLight border-solid border-1">x</th>
                    <th>Land</th>
                    <th>code</th>
                    <th>Jahr0</th>
                    <th>Jahr1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-blueExtraLight border-solid border-1">
                    <td className="border border-blueExtraLight border-solid border-1">1</td>
                    <td>China</td>
                    <td>CHN</td>
                    <td>10.064.147</td>
                    <td>10.064.147</td>
                  </tr>
                  <tr className="border border-blueExtraLight border-solid border-1">
                    <td className="border border-blueExtraLight border-solid border-1">2</td>
                    <td>USA</td>
                    <td>USA</td>
                    <td>5.416.317</td>
                    <td>5.416.317</td>
                  </tr>
                  <tr className="border border-blueExtraLight border-solid border-1">
                    <td className="border border-blueExtraLight border-solid border-1">3</td>
                    <td>Indien</td>
                    <td>IND</td>
                    <td>2.654.400</td>
                    <td>2.654.400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
