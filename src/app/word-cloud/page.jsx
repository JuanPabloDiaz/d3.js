"use client";

import { LinePlot_D3 } from "@/components/shared/D3/LinePlot";
import { WordCloud_D3 } from "@/components/shared/D3/WordCloud";

export default function TemplatePage() {
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

  return (
    <>
      <section className="px-4">
        <div className="">
          <h3 className="mt-4 text-left text-3xl font-semibold">Word Cloud</h3>
          <section className="flex gap-4 pt-10">
            <div className="mx-auto rounded-lg border p-2">
              {/* <h2></h2> */}
              <WordCloud_D3 text={text} options={options} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
