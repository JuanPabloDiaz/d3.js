"use client";

import { LatamMap_D3 } from "@/components/shared/D3/LatamMap";
import { SelectLatamMap_D3 } from "@/components/shared/D3/SelectLatamMap";
import { WorldMap_D3 } from "@/components/shared/D3/WorldMap";

export default function mapsPage() {
  return (
    <>
      <main className="px-4">
        <h3 className="mt-4 text-left text-3xl font-semibold">World Map</h3>
        <section className="flex gap-4 pt-10">
          <div className="mx-auto rounded-lg border p-2">
            <h2 className="font-semibold">Select Latam Map</h2>
            <SelectLatamMap_D3 />
          </div>
          <div className="mx-auto rounded-lg border p-2">
            <h2 className="font-semibold">Latam Map</h2>
            <LatamMap_D3 />
          </div>
        </section>
        <section className="flex gap-4 pt-10">
          <div className="mx-auto rounded-lg border p-2">
            <h2 className="font-semibold">World Map</h2>
            <WorldMap_D3 />
          </div>
        </section>
      </main>
    </>
  );
}
