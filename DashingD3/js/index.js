
///-----------1. SVG Shapes with JSON Data-------////
var circleData = [{"r":40, "pos": 30},
				  {"r":20, "pos": 70},
				  {"r":10, "pos": 110}];

var canvas1 = d3.select("body").append("svg")
									.attr("width", 200)
									.attr("height", 200)
									.style("border", "1px solid black");
var title1 = canvas1
				.append("text")
				.attr("x",10)
				.attr("y",180)
				.text("SVG Shapes with JSON Data")
				.attr("font-family", "sans-serif")
				.attr("font-size", "13px")
				.attr("fill", "black");

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
						}); //d = __data__

///-----------2. Path Data Generator-------////
//Tutorial URL: https://www.dashingd3js.com/svg-paths-and-d3js

var canvas2 = d3.select("body").append("svg")
									.attr("width", 200)
									.attr("height", 200)
									.style("border", "1px solid black");
var title2 = canvas2
				.append("text")
				.attr("x",10)
				.attr("y",180)
				.text("Path Data Generator")
				.attr("font-family", "sans-serif")
				.attr("font-size", "13px")
				.attr("fill", "black");

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

///-----------3. Resize Canvas-------////
//Tutorial URL: https://www.dashingd3js.com/dynamic-svg-coordinate-space

var jsonRectangles = [
   { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
   { "x_axis": 160, "y_axis": 160, "height": 20, "width":20, "color" : "purple" },
   { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];
 
//Key Point
//TODO: Package this function. input: jsonData and the "boundingbox" of the elements
//output: something like max_x, max_y.
var max_x = 0;
var max_y = 0;

for(var i = 0; i < jsonRectangles.length; i++)
{
	var temp_x, temp_y;

	temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
	temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

	max_x = temp_x > max_x ? temp_x : max_x;
	max_y = temp_y > max_y ? temp_y : max_y;
}


//Create canvas
var canvas3 = d3.select("body").append("svg")
                                     .attr("width", max_x + 20)
                                     .attr("height", max_y + 20)
                                     .style("border", "1px solid black");

var title3 = canvas3
				.append("text")
				.attr("x",10)
				.attr("y",180)
				.text("Dynamic Canvas")
				.attr("font-family", "sans-serif")
				.attr("font-size", "13px")
				.attr("fill", "black");

var rectangles = canvas3.selectAll("rect")
                             .data(jsonRectangles)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                          .attr("x", function (d) { return d.x_axis; })
                          .attr("y", function (d) { return d.y_axis; })
                          .attr("height", function (d) { return d.height; })
                          .attr("width", function (d) { return d.width; })
                          .style("fill", function(d) { return d.color; });




///-----------4. Grouping, Transformation and Text-------////
var circlesData = [
   { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
   { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }];
 
 
 var rectanglesData = [
   { "rx": 110, "ry": 110, "height": 30, "width": 30, "color" : "blue" },
   { "rx": 160, "ry": 160, "height": 30, "width": 30, "color" : "red" }];
 
var canvas4 = d3.select("body").append("svg")
                                     .attr("width",200)
                                     .attr("height",200)
                                     .style("border", "1px solid black");
var title4 = canvas4
				.append("text")
				.attr("x",10)
				.attr("y",180)
				.text("Group, Transform & Text")
				.attr("font-family", "sans-serif")
				.attr("font-size", "13px")
				.attr("fill", "black");

//Key point
var circleGroup = canvas4.append("g")
							.attr("transform", "translate(80,0)");

var circles = circleGroup.selectAll("circle")
                           .data(circlesData)
                           .enter()
                           .append("circle");

var texts = circleGroup.selectAll("text")
						.data(circlesData)
						.enter()
						.append("text");

var textAttributes = texts
						.attr("x", function(d) {return d.cx;})
						.attr("y", function(d) {return d.cy;})
						.text(function (d) {return "("+d.cx+","+d.cy+")";})
						.attr("font-family", "sans-serif")
						.attr("font-size", "20px")
						.attr("text-anchor","middle")
						.attr("fill", "black");

var circleAttributes = circles
                        .attr("cx", function (d) { return d.cx; })
                        .attr("cy", function (d) { return d.cy; })
                        .attr("r", function (d) { return d.radius; })
                        .style("fill", function (d) { return d.color; });

var rectangles = canvas4.selectAll("rect")
                             .data(rectanglesData)
                             .enter()
                             .append("rect");

var rectangleAttributes = rectangles
                           .attr("x", function (d) { return d.rx; })
                           .attr("y", function (d) { return d.ry; })
                           .attr("height", function (d) { return d.height; })
                           .attr("width", function (d) { return d.width; })
                           .style("fill", function(d) { return d.color; });

///-----------5. Scale and Axis-------////
var canvas5 = d3.select("body").append("svg")
									.attr("width", 400)
									.attr("height", 100)
									.style("border", "1px solid black");
var title5 = canvas5
				.append("text")
				.attr("x",10)
				.attr("y",80)
				.text("Scale and Axis")
				.attr("font-family", "sans-serif")
				.attr("font-size", "13px")
				.attr("fill", "black");


var axisScale = d3.scale.linear() //[0,1] --> [0,1], i.e., 1:1 mapping
								.domain([0,100])
								.range([0,400]); //to match the canvas

//This is a function
var xAxis = d3.svg.axis()
					.scale(axisScale);
typeof(xAxis);

//A group for Axis
var xAxisGroup = canvas5.append("g")
						.call(xAxis);

