// set the dimensions and margins of the graph
var width = 550
    height = 550
    margin = 20

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#grafico")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {um: 10, dois: 20, tres:30, quatro:8, cinco:12, seis:0}

const cores = ["#0f0", "#f00", "#00f", "#000f00", "#ccc", "#0cc"]
// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(cores)

  for(let i=0; i<cores.length;i++){
    document.getElementById('legenda').innerHTML += `<span>
    <div class="box" style="background-color:${cores[i]}"></div>${Object.keys(data)[i]}
    </span>`
  }


// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(100)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "1px")
  .style("opacity", 0.7)