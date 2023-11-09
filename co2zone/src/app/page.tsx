"use client";
import { useState, useEffect } from "react";
import MenuHeader from "./components/menuHeader";
import jsonData from "./Data/table.json";

interface TableData {
  code?: string;
  country: string;
  CO2_emissions: { [key: string]: number };
  company?: string;
}

export default function Home() {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [showCompanies, setShowCompanies] = useState<string>("true");
  const [sortOrder, setSortOrder] = useState<"oldToNew" | "newToOld">(
    "oldToNew"
  );
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [favoritesClicked, setFavoritesClicked] = useState(false);

  useEffect(() => {
    const formattedData: TableData[] = jsonData.table.map((item: any) => ({
      code: item.code || "",
      country: item.country || "",
      CO2_emissions: item.CO2_emissions || {},
      company: item.company || "",
    }));
    setTableData(formattedData);
  }, [jsonData]);

  const handleYearClick = (year: string) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const handleCountryClick = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleCompanyClick = (company: string) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const handleFavorites = () => {
    setFavoritesClicked(true);
    const filteredData = tableData.filter((item) => {
      if (
        selectedCountries.includes(item.country) ||
        selectedCompanies.includes(item.company ?? "")
      ) {
        const filteredCO2 = Object.keys(item.CO2_emissions).reduce(
          (acc: { [key: string]: number }, key) => {
            if (selectedYears.includes(key)) {
              acc[key] = item.CO2_emissions[key];
            }
            return acc;
          },
          {}
        );
        return Object.keys(filteredCO2).length > 0;
      }
      return false;
    });
    setTableData(filteredData);
  };
  
  const allYears = tableData.reduce((acc, curr) => {
    const years = Object.keys(curr.CO2_emissions);
    years.forEach((year) => {
      if (!acc.includes(year)) {
        acc.push(year);
      }
    });
    return acc;
  }, [] as string[]);

  const handleShowData = (value: string) => {
    setShowCompanies(value);
    let filteredData;
    if (value === "true") {
      filteredData = jsonData.table.filter((item: any) => item.company);
    } else if (value === "false") {
      filteredData = jsonData.table.filter((item: any) => item.country);
    } else {
      filteredData = jsonData.table;
    }
    const formattedData: TableData[] = filteredData.map((item: any) => ({
      code: item.code || "",
      country: item.country || "",
      CO2_emissions: item.CO2_emissions || {},
      company: item.company || "",
    }));
    setTableData(formattedData);
  };

  const handleSortChange = (value: string) => {
    if (value === "oldToNew" || value === "newToOld") {
      setSortOrder(value as "oldToNew" | "newToOld");
    }
  };

  const sortedYears = [...allYears].sort((a, b) => {
    if (sortOrder === "oldToNew") {
      return parseInt(a) - parseInt(b);
    } else {
      return parseInt(b) - parseInt(a);
    }
  });

  const handleCO2SortChange = (value: string) => {
    const sortedData = [...tableData].sort((a, b) => {
      const aTotalCO2 = parseFloat(calculateTotalCO2Emissions(a.CO2_emissions));
      const bTotalCO2 = parseFloat(calculateTotalCO2Emissions(b.CO2_emissions));
      if (value === "lowToHigh") {
        return aTotalCO2 - bTotalCO2;
      } else {
        return bTotalCO2 - aTotalCO2;
      }
    });
    setTableData(sortedData);
  };

  const calculateTotalCO2Emissions = (CO2Data: { [key: string]: number }) => {
    let totalCO2 = 0;
    Object.values(CO2Data).forEach((value) => {
      totalCO2 += value;
    });
    return totalCO2.toFixed(2);
  };

  const filteredYears = sortedYears.filter((year) => selectedYears.includes(year));



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
            <h2 className="text-lg sm:text-4xl align-center flex justify-center p-3 text-center text-blueDark bg-blueExtraLight">
              CO2-Emission-Overview (Unit:MtCO2e)
            </h2>

            <div className="flex justify-center bg-blueDark border border-blueExtraLight border-solid border-1 items-center">
              <div>
                <label className="text-blueExtraLight" htmlFor="showData">
                  Show:
                </label>
                <select
                  className="bg-blueExtraLight border border-blueExtraLight border-solid border-1 rounded-md text-blueDark p-1 m-1"
                  id="showData"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "true") {
                      handleShowData("true");
                    } else if (value === "false") {
                      handleShowData("false");
                    } else {
                      handleShowData("all");
                    }
                  }}
                >
                  <option value="all">All</option>
                  <option value="true">Only Companies</option>
                  <option value="false">Only Countries</option>
                </select>
              </div>

              <div>
                <label className="text-blueExtraLight" htmlFor="sortData">
                  Sort:
                </label>
                <select
                  className="bg-blueExtraLight border border-blueExtraLight border-solid border-1 rounded-md text-blueDark p-1 m-1"
                  id="sortData"
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="oldToNew">Old to New</option>
                  <option value="newToOld">New to Old</option>
                </select>
              </div>

              <div>
                <label className="text-blueExtraLight" htmlFor="sortCO2">
                  CO2 Emissions:
                </label>
                <select
                  className="bg-blueExtraLight border border-blueExtraLight border-solid border-1 rounded-md text-blueDark p-1 m-1"
                  id="sortCO2"
                  onChange={(e) => handleCO2SortChange(e.target.value)}
                >
                  <option value="">Unsorted</option>
                  <option value="lowToHigh">Low to High</option>
                  <option value="highToLow">High to Low</option>
                </select>
              </div>
              <div className="bg-blueExtraLight border border-blueExtraLight border-solid border-1 rounded-md text-blueDark p-1 m-1">
                <button onClick={handleFavorites}> Set Favorites</button>
              </div>
            </div>

            <div
              className="list-group-item mb-0"
              style={{ overflowX: "auto", width: "w-[90vw] sm:w-[80vw]" }}
            >
              <table className="bg-blueLight w-[90vw] sm:w-[80vw] text-blueExtraDark text-left text-sm sm:text-xl mb-4">
                <thead>
                  <tr className="border border-blueExtraLight border-solid border-1">
                    <th className="border border-blueExtraLight border-solid border-1">
                      code
                    </th>
                    <th className="border border-blueExtraLight border-solid border-1">
                      Country & Company
                    </th>
                    {favoritesClicked && selectedCountries.length > 0 || selectedCompanies.length > 0 ? (
                      filteredYears.map((year) => (
                        <th
                          key={year}
                          className={`border border-blueExtraLight border-solid border-1 ${
                            selectedYears.includes(year) ? "bg-blueDark text-blueExtraLight" : ""
                          }`}
                          onClick={() => handleYearClick(year)}
                          style={{ cursor: "pointer" }}
                        >
                          {year}
                        </th>
                      ))
                    ) : (
                      sortedYears.map((year) => (
                        <th
                          key={year}
                          className={`border border-blueExtraLight border-solid border-1 ${
                            selectedYears.includes(year) ? "bg-blueDark text-blueExtraLight" : ""
                          }`}
                          onClick={() => handleYearClick(year)}
                          style={{ cursor: "pointer" }}
                        >
                          {year}
                        </th>
                      ))
                    )}
                    <th className="border border-blueExtraLight border-solid border-1">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item: TableData, index: number) => (
                    <tr
                      key={index}
                      className={`border border-blueExtraLight border-solid border-1 ${
                        selectedCountries.includes(item.country ?? "") ||
                        selectedCompanies.includes(item.company ?? "")
                          ? "bg-blueDark text-blueExtraLight"
                          : ""
                      }`}
                      onClick={() => {
                        if (item.company) {
                          handleCompanyClick(item.company);
                        } else {
                          if (item.country) {
                            handleCountryClick(item.country);
                          }
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <td className="border border-blueExtraLight border-solid border-1">
                        {item.code || "-"}
                      </td>
                      <td className="border border-blueExtraLight border-solid border-1">
                        {item.country || item.company}
                      </td>

                    
                      {favoritesClicked 
                        ? filteredYears.map((year) => (
                            <td
                              key={year}
                              className={`border border-blueExtraLight border-solid border-1 ${
                                selectedYears.includes(year) ? "bg-blueDark text-blueExtraLight" : ""
                              }`}
                              onClick={() => handleYearClick(year)}
                              style={{ cursor: "pointer" }}
                            >
                              {item.CO2_emissions[year] || "-"}
                            </td>
                          ))
                        : sortedYears.map((year) => (
                            <td
                              key={year}
                              className={`border border-blueExtraLight border-solid border-1 ${
                                selectedYears.includes(year) ? "bg-blueDark text-blueExtraLight" : ""
                              }`}
                              onClick={() => handleYearClick(year)}
                              style={{ cursor: "pointer" }}
                            >
                              {item.CO2_emissions[year] || "-"}
                            </td>
                          ))}
                      <td className="border border-blueExtraLight border-solid border-1">
                        {calculateTotalCO2Emissions(item.CO2_emissions)}
                      </td>
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
