import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

export const LatamMap_D3 = () => {
  const ref = useRef();

  useEffect(() => {
    const width = 500;
    const height = 500;
    const svg = d3
      .select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const projection = d3
      .geoMercator()
      .scale(260)
      .translate([width / 0.9, height / 3]);
    const path = d3.geoPath(projection);

    const WorldMap_api =
      'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

    const g = svg.append('g');

    // const southAmericaCountries = [
    //   'Argentina',
    //   'Bolivia',
    //   'Brazil',
    //   'Chile',
    //   'Colombia',
    //   'Ecuador',
    //   'Guyana',
    //   'Paraguay',
    //   'Peru',
    //   'Suriname',
    //   'Uruguay',
    //   'Venezuela',
    //   'Mexico',
    // ];

    const latamCountries = [
      'Argentina',
      'Bolivia',
      'Brazil',
      'Chile',
      'Colombia',
      'Ecuador',
      'Guyana',
      'Paraguay',
      'Peru',
      'Suriname',
      'Uruguay',
      'Venezuela',
      'Mexico',
      'Costa Rica',
      'El Salvador',
      'Guatemala',
      'Honduras',
      'Nicaragua',
      'Panama',
      'Cuba',
      'Dominican Republic',
      'Haiti',
    ];

    d3.json(WorldMap_api).then(data => {
      const countries = topojson.feature(data, data.objects.countries);
      // const southAmerica = countries.features.filter(feature =>
      //   southAmericaCountries.includes(feature.properties.name)
      // );
      const latam = countries.features.filter(feature =>
        latamCountries.includes(feature.properties.name)
      );
      g.selectAll('path')
        // .data(southAmerica)
        .data(latam)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path);
    });
  }, []);

  return (
    <svg ref={ref} fill="orange" stroke="currentColor" strokeWidth="1.4" />
  );
};
