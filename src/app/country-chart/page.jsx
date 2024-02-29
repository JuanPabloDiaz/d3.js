"use client";

import { CountryChart_D3 } from "@/components/shared/D3/CountryChart";
import { LatamCountryChart_D3 } from "@/components/shared/D3/LatamCountryChart";

export default function mapsPage() {
  return (
    <>
      <main className="px-4">
        <div className="">
          <h3 className="mt-4 text-left text-3xl font-semibold">
            Country Chart
          </h3>
          <div className="mx-auto rounded-lg border p-2">
            <h2>
              Countries by Area
              <span className="pl-2 text-gray-500">Country Chart</span>
            </h2>
          </div>
          <section className="flex gap-4 pt-10">
            <div className="mx-auto rounded-lg border p-2">
              <h2>
                Countries by Area
                <span className="pl-2 text-gray-500">Country Chart</span>
              </h2>
              <CountryChart_D3 />
              <LatamCountryChart_D3 />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
