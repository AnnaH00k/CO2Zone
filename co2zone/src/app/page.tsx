"use client";
import Image from "next/image";
import MenuHeader from "./components/menuHeader";
import jsonData from "./Data/table.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  // Ensure that the interface is defined outside the component
  interface TableData {
    country: string;
    code?: string;
    CO2_emissions: { [key: string]: number };
    company?: string;
  }

  // Fetch the data on component mount
  useEffect(() => {
    const formattedData: TableData[] = jsonData.table.map((item: any) => ({
      country: item.country || "",
      code: item.code || "",
      CO2_emissions: item.CO2_emissions || {},
      company: item.company || "",
    }));
    setTableData(formattedData);
  }, [jsonData]);

 // Extract the years from the data to dynamically generate table headers
const allYears = tableData.reduce((acc, curr) => {
  const years = Object.keys(curr.CO2_emissions);
  years.forEach((year) => {
    if (!acc.includes(year)) {
      acc.push(year);
    }
  });
  return acc;
}, [] as string[]);


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
          <section className="mt-4 w-[90vw] sm:w-[80vw]">
            <h2 className="text-lg sm:text-4xl align-center flex justify-center p-3  text-blueDark bg-blueExtraLight">
              CO2-Emission-Overview
            </h2>
            <div className="list-group-item mb-0" style={{ overflowX: "auto", width: "w-[90vw] sm:w-[80vw]" }}>
              <table className="bg-blueLight w-[90vw] sm:w-[80vw] text-blueExtraDark text-left text-sm sm:text-xl mb-4">
                <thead>
                  <tr className="border border-blueExtraLight border-solid border-1">
                    <th className="border border-blueExtraLight border-solid border-1">x</th>
                    <th className="border border-blueExtraLight border-solid border-1">Land & company</th>
                    <th className="border border-blueExtraLight border-solid border-1">code</th>
                    {allYears.map((year) => (
                      <th key={year} className="border border-blueExtraLight border-solid border-1">
                        {year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Loop through the tableData to create rows */}
                  {tableData.map((item: TableData, index: number) => (
                    <tr key={index} className="border border-blueExtraLight border-solid border-1">
                      <td className="border border-blueExtraLight border-solid border-1">{index + 1}</td>
                      <td className="border border-blueExtraLight border-solid border-1">{item.country || item.company}</td>
                      <td className="border border-blueExtraLight border-solid border-1">{item.code || "-"}</td>
                      {allYears.map((year) => (
                        <td key={year} className="border border-blueExtraLight border-solid border-1">
                          {item.CO2_emissions[year] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
