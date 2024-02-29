// source: https://observablehq.com/@d3/word-cloud

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import d3Cloud from 'd3-cloud';

export const WordCloud_D3 = ({ text, options }) => {
  const {
    size = group => group.length,
    word = d => d,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    width = 640,
    height = 400,
    maxWords = 250,
    fontFamily = 'sans-serif',
    fontScale = 15,
    fill = null,
    padding = 0,
    rotate = 0,
    invalidation,
  } = options || {};

  const ref = useRef();

  useEffect(() => {
    const words =
      typeof text === 'string' ? text.split(/\W+/g) : Array.from(text);
    const data = d3
      .rollups(words, size, w => w)
      .sort(([, a], [, b]) => d3.descending(a, b))
      .slice(0, maxWords)
      .map(([key, size]) => ({ text: word(key), size }));

    const svg = d3
      .select(ref.current)
      .attr('viewBox', [0, 0, width, height])
      .attr('width', width)
      .attr('font-family', fontFamily)
      .attr('text-anchor', 'middle')
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

    const g = svg
      .append('g')
      .attr('transform', `translate(${marginLeft},${marginTop})`);

    const cloud = d3Cloud()
      .size([
        width - marginLeft - marginRight,
        height - marginTop - marginBottom,
      ])
      .words(data)
      .padding(padding)
      .rotate(rotate)
      .font(fontFamily)
      .fontSize(d => Math.sqrt(d.size) * fontScale)
      .on('word', ({ size, x, y, rotate, text }) => {
        g.append('text')
          .datum(text)
          .attr('font-size', size)
          .attr('fill', fill)
          .attr('transform', `translate(${x},${y}) rotate(${rotate})`)
          .text(text);
      });

    cloud.start();
    invalidation && invalidation.then(() => cloud.stop());
  }, [text, options]);

  return <svg ref={ref}></svg>;
};
