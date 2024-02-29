"use client";

import { LinePlot_D3 } from "../../shared/D3/LinePlot";
import { WorldMap_D3 } from "../../shared/D3/WorldMap";
import { LatamMap_D3 } from "../../shared/D3/LatamMap";
import { WordCloud_D3 } from "../../shared/D3/WordCloud";
import { CountryChart_D3 } from "../../shared/D3/CountryChart";
import { LatamCountryChart_D3 } from "../../shared/D3/LatamCountryChart";

export const TestingDashboards = () => {
  // For the WordCloud component:
  const text =
    "Hello world! This is a test of the WordCloud_D3 component. It is a test of the WordCloud_D3 component.";
  const options = {
    size: (group) => group.length,
    word: (d) => d,
    width: 600,
    height: 600,
    maxWords: 300,
    fontFamily: "Arial",
    fontScale: 20,
    fill: "black",
    padding: 1,
    rotate: 0,
  };
  // For the CountryChart component:

  return (
    <>
      {/* <h3>Testing & Deploying Dashboards</h3> */}
      <h3 className="mt-4 text-left text-3xl font-semibold">D3.js...</h3>
      <div className="mx-auto rounded-lg border p-2">
        <h2>
          Countries by Area
          <span className="pl-2 text-gray-500">Country Chart</span>
        </h2>
        <LatamCountryChart_D3 />
      </div>
      <section className="flex gap-4 pt-10">
        {/* <div className="mx-auto rounded-lg border p-2">
          <h2>LinePlot</h2>
          <LinePlot_D3 />
        </div> */}
        {/* <div className="mx-auto rounded-lg border p-2">
          <h2>World Map</h2>
          <WorldMap_D3 />
        </div> */}
        <div className="mx-auto rounded-lg border p-2">
          <h2>
            Countries by Area
            <span className="pl-2 text-gray-500">Country Chart</span>
          </h2>
          <CountryChart_D3 />
        </div>
        <div className="mx-auto rounded-lg border p-2">
          <h2>Word Cloud</h2>
          <WordCloud_D3 text={text} options={options} />
        </div>
        <div className="mx-auto rounded-lg border p-2">
          <h2>Latam Map</h2>
          <LatamMap_D3 />
        </div>
      </section>
    </>
  );
};
