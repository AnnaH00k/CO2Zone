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
          <h1 className="text-blueExtraLight text-4xl animate-pulse m-4  ">
            Advancing Environmental Consciousness, Together!
          </h1>
        </div>

        <div className="justify-center align-center flex items-center w-[100vw]">
          <section className="mt-4 ">
            <h2 className="text-4xl align-center flex justify-center p-4  text-blueDark bg-blueExtraLight">
              CO2-Emissionsübersicht
            </h2>
            <div className="list-group-item mb-0">
              <table className="table">
                <thead>
                  <tr>
                    <th>x</th>
                    <th>Land</th>
                    <th>code</th>
                    <th>Jahr0</th>
                    <th>Jahr1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>China</td>
                    <td>CHN</td>
                    <td>10.064.147</td>
                    <td>10.064.147</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>USA</td>
                    <td>USA</td>
                    <td>5.416.317</td>
                    <td>5.416.317</td>
                  </tr>
                  <tr>
                    <td>3</td>
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
