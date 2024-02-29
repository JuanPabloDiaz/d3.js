'use client';

import { useState } from 'react';

export default function DataFromAPI({ api_name }) {
  const [Loading, setLoading] = useState(false);
  const fetchDataFromAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/${api_name}`, {
        headers: {
          Accept: 'application/json',
          method: 'GET',
        },
      });
      if (response) {
        const data = await response.json();
        console.log('Data from API: ', data);
      }
    } catch (error) {
      console.error('Error fetching data from API: ', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Card from API</h1>
      <button
        onClick={fetchDataFromAPI}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
        Fetch Data from API Route:
        <span className="pl-2 font-bold uppercase text-orange-200">
          {api_name}
        </span>
      </button>
      {Loading && <p>Loading...</p>}
    </div>
  );
}
