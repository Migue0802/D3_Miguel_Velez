d3.csv("data/ages.csv").then((data)=> {
	console.log(data);
});
d3.tsv("data/ages.tsv").then((data)=> {
	console.log(data);
});
const svg = d3.select("#chart-area").append("svg")
    .attr("width", 600)
    .attr("height", 400);
d3.json("data/ages.json")
    .then(data => {
        data.forEach(d => {
            d.age = +d.age;
        });
        console.log("Data after parsing:", data);
        
        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => i * 100 + 100)
            .attr("cy", 200)
            .attr("r", d => d.age * 3)
            .attr("fill", d => {
                return d.age > 10 ? "red" : "blue";
            })
    })
    .catch(error => {
        console.error("Error loading the data:", error);
    });