
///-----------1. SVG Shapes with JSON Data-------////
var circleData = [{"r":40, "pos": 30},
				  {"r":20, "pos": 70},
				  {"r":10, "pos": 110}];

var canvas1 = d3.select("body").append("svg")
									.attr("width", 200)
									.attr("height", 200)
									.style("border", "1px solid black");


var circles = canvas1.selectAll("circle")
						  .data(circleData)
						  .enter()
						  .append("circle");	

var circleAttributes = circles
						.attr("cx", function(d){return d.pos;})
						.attr("cy", function(d){return d.pos;})
						.attr("r", function(d) {return d.r;})
						.style("fill",function(d){
							if(d.r===40) return "green";
							if(d.r===20) return "purple";
							if(d.r===10) return "red";
						});
		//d = __data__

///-----------2. Path Data Generator-------////
var canvas2 = d3.select("body").append("svg")
									.attr("width", 200)
									.attr("height", 200)
									.style("border", "1px solid black");


//data
var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

//accessor function
var lineFunction = d3.svg.line()
							.x(function(d) {return d.x;})
							.y(function(d) {return d.y;})
							.interpolate("linear"); 

var lineGraph = canvas2.append("path")
						.attr("d", lineFunction(lineData))
						.attr("stroke", "blue")
                        .attr("stroke-width", 2)
                        .attr("fill", "none");