'use client';

import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import countriesData from './countries.json';

const width = 640;

// Filter using an array of LATAM countries
const LATAM_COUNTRIES = [
  'Argentina',
  'Bolivia',
  'Brazil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Dominican Republic',
  'Ecuador',
  'El Salvador',
  'Guatemala',
  'Haiti',
  'Honduras',
  'Mexico',
  'Nicaragua',
  'Panama',
  'Paraguay',
  'Peru',
  'Uruguay',
  'Venezuela',
];
const LatamCountryChart_D3 = () => {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('./countries.json');
  //     const data = await response.json();

  //     const countries = countriesData
  //       .feature(data, 'countries')
  //       .features.filter(d => LATAM_COUNTRIES.includes(d.properties.name))
  //       .map(d => {
  //         console.log('country name: ', d.properties?.name); // Log the country name to the console
  //         return (d.properties.area = d3.geoArea(d)), d;
  //       })
  //       .sort((a, b) => d3.descending(a.properties.area, b.properties.area));
  //     // const countries = countriesData
  //     //   .feature(data, 'countries')
  //     //   .features.filter(d => LATAM_COUNTRIES.includes(d.properties?.name)) // Filter the countries
  //     //   .map(d => ((d.properties.area = d3.geoArea(d)), d))
  //     //   .sort((a, b) => d3.descending(a.properties.area, b.properties.area));

  //     // setCountries(countries);
  //   };

  //   fetchData();
  // }, []);

  console.log('countries: ', countriesData);
  return (
    <div>
      {countriesData?.map((country, i) => {
        const [cx, cy] = d3.geoCentroid(country);
        const projection = d3
          .geoAzimuthalEqualArea()
          .rotate([-cx, -cy])
          .scale(width / 2.5);
        const path = d3.geoPath(projection);
        const [[x0, y0], [x1, y1]] = path.bounds(country);
        return (
          <svg
            key={i}
            className="country"
            width={x1 - x0}
            height={y1 - y0}
            viewBox={`${x0} ${y0} ${x1 - x0} ${y1 - y0}`}
            fill="currentColor">
            <path d={path(country)}></path>
            <title>
              {country.properties.name}
              {(+(country.properties.area * 6371 * 6371).toPrecision(
                3
              )).toLocaleString('en')}{' '}
              km² Rank {i + 1}
            </title>
          </svg>
        );
      })}
      <style jsx>{`
        .country {
          vertical-align: middle;
          padding: 4px;
          border: solid 1px transparent;
        }
        .country:hover {
          fill: red;
          border-color: #ccc;
        }
      `}</style>
    </div>
  );
};

export default LatamCountryChart_D3;
