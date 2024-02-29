// source: https://www.youtube.com/watch?v=urfyp-r255A

// import * as d3 from 'd3';

// const width = 640;
// const height = 400;

// const svg = d3
//   .select('body')
//   .append('svg')
//   .attr('width', width)
//   .attr('height', height);

// const projection = d3.geoMercator();
// const path = d3.geoPath(projection);

// WorldMap_api = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// const g = svg.append('g');

// d3.json(WorldMap_api).then(data => {
//   const countries = topojson.feature(data, data.objects.countries);
//   console.log('countries: ', countries);
//   g.selectAll('path')
//     .data(countries.feature)
//     .enter()
//     .append('path')
//     .attr('class', 'country')
//     .attr(d, path);
// });

// ****************************************************************************************

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";

export const WorldMap_D3 = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current).attr("width", 640).attr("height", 450);

    const projection = d3.geoMercator().scale(100).translate([320, 300]);
    const path = d3.geoPath(projection);

    const WorldMap_api =
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

    const g = svg.append("g");
    // const g = svg.append("g").attr("transform", "translate(0,50)"); // move the group up by 50 pixels

    d3.json(WorldMap_api).then((data) => {
      const countries = topojson.feature(data, data.objects.countries);
      console.log("countries: ", countries);
      g.selectAll("path")
        .data(countries.features) // changed from countries.feature to countries.features
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path); // changed from .attr(d, path) to .attr('d', path)
    });
  }, []);

  return <svg ref={ref} fill="gray" stroke="currentColor" strokeWidth="1.4" />;
};
