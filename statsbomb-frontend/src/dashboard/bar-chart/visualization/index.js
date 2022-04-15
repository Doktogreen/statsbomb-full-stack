import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  // axisLeft,
  stackOrderAscending
} from "d3";
import useResizeObserver from "./resizer";


 //Component that renders a StackedBarChart
function StackedBarChart({ data, keys, colors, component, status }) {
  const svgRef = useRef();
  const yAxisRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    // const yAxisSvg = select(yAxisRef.current);
    const {  height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    // Create the stack and group it so that the smallest values are on the bottom
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);

    // This is our min/max values
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1] + 0.2))
    ];

    // scales
    const xScale = scaleBand()
      .domain(data.map((d) => component === true ? d.player_name 
        : status === "teams" ? d.team_name :  d.match_date))
      .rangeRound([0, component === true || status === "teams" ? data.length*160 : data.length * 100])
      .padding(component === true ? 0.6 : 0.5);

    const yScale = scaleLinear()
      .domain(extent)
      .rangeRound([height + 50, 0]);

    // rendering
    svg
      .attr("width", data.length * 50)
      .attr("height", height)
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("class", "data-bar")
      .attr("x", (sequence) => xScale( component === true ? sequence.data.player_name 
        : status === "teams" ? sequence.data.team_name : sequence.data.match_date))
      .attr("width", xScale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => {
        if (!isNaN(sequence[0]) && !isNaN(sequence[1])) {
          return yScale(sequence[0]) - yScale(sequence[1]);
        } else {
          return 0;
        }
      });

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height + 50})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "3em")
      .attr("dy", "2em")
      .attr("transform", "rotate(0)")
      .style("font-size", "12px")

    // const yAxis = axisLeft(yScale);
    // yAxisSvg.select(".y-axis").attr("height", height).call(yAxis);
  }, [colors, data, dimensions, keys, component, status]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} className="svg-wrap">
        <div>
          <svg ref={yAxisRef} className="y-axis-svg" width="1">
            <g className="y-axis" />
          </svg>
        </div>
        <div className="x-axis-scroll">
          <svg className="energy-svg" ref={svgRef}>
            <g className="x-axis" />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChart;
