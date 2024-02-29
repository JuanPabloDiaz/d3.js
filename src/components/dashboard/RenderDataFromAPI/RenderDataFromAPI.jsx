'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card_API } from '../Tremor/CardAPI';
import { Card_Tremor } from '../Tremor/Card';

export default function RenderDataFromAPI({ api_name }) {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(null);

  const fetchDataFromAPI = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/${api_name}`, {
        headers: {
          Accept: 'application/json',
          method: 'GET',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
        console.log('Data from API: ', data);
      }
    } catch (error) {
      console.error('Error fetching data from API: ', error);
    } finally {
      setLoading(false);
    }
  }, [api_name]);

  useEffect(() => {
    fetchDataFromAPI();
  }, [fetchDataFromAPI]);

  return (
    <>
      <h1>Fetching Data from the API/Companies route</h1>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        Data && <p>{JSON.stringify(Data.companies[0].products[0].name)}</p>
      )}
      <section>
        <div>
          <h1>Card from API</h1>
          {Loading ? (
            <p>Loading...</p>
          ) : (
            Data &&
            Data.companies.map((company, index) => (
              <div key={index} className="mt-4 space-y-4">
                <h2 className="text-xl font-bold">{company.name}</h2>
                <div className="flex items-center justify-around gap-2">
                  {company.products.map((product, i) => (
                    <Card_Tremor
                      key={i}
                      card_wraper_class="mx-auto max-w-md"
                      title={product.name}
                      title_class="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                      price_bold={`$${product.price}`}
                      price_bold_class="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"
                      p_span_class="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                      span_left={`${product.rating} stars`}
                      span_right={`${product.sales} sales`}
                      value_progressBar={
                        product.rating * Math.floor(Math.random() * 10)
                      }
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
