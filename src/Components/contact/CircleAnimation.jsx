import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CircleAnimation = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const CircleNumber = 6;
    const data = Array.from(Array(CircleNumber).keys());

    function emananting(num) {
      svg
        .selectAll("circle.emanting")
        .transition()
        .duration((d, i) => {
          return 2500;
        })
        .delay((d, i) => {
          return i * 500;
        })
        .attr("opacity", 0)
        .attr("r", 50)
        .on("end", (d, i, g) => {
          d3.select(g[i]).attr("r", 10).attr("opacity", 1);
          if (i === 5 && num < 2) {
            console.log(num);
            emananting(num + 1);
          }
        });
    }
    svg
      .append("circle")
      .classed("CircleBody", true)
      .attr("r", 10)
      .attr("stroke", "yellow")
      .attr("fill", "orange")
      .attr("opacity", 1)
      .attr("cx", 125)
      .attr("cy", 125);

    svg
      .selectAll("circle.emanting")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "emanting")
      .attr("id", (d, i) => {
        return "number" + i;
      })
      .attr("r", 10)
      .attr("stroke", "orange")
      .attr("fill", "none")
      .attr("opacity", 1)
      .attr("cx", 125)
      .attr("cy", 125);

    emananting(0);
  }, []);

  return <svg ref={svgRef} width={250} height={250} />;
};

export default CircleAnimation;
