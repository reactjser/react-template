import React, { Component } from 'react';
import * as d3 from 'd3';

export class PieChart extends Component {
  componentDidMount() {
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const data = [1, 1, 2, 3, 5, 8, 13, 21];
    const pies = d3.pie()(data);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(150)
      .startAngle(d => d.startAngle)
      .endAngle(d => d.endAngle);

    const svg = d3
      .select('svg')
      .append('g')
      .attr('transform', 'translate(200,200)');
    svg
      .selectAll('path')
      .data(pies)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors(d.value))
      .attr('stroke', '#fff');
  }

  render() {
    return <svg width="600" height="400"></svg>;
  }
}

export default PieChart;
