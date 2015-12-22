var data = [4, 8, 15, 16, 23, 42];

// Dynamic chart with scaling done by hand
d3.select("#dynamic-chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

// Scaling according to maximum value in data
d3.select("#dynamic-chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
