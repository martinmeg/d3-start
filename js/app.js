// Introduction

var data = [
	'Walter White',
    'Skyler White',
    'Jesse Pinkman',
    'Hank Schrader',
    'Marie Schrader',
    'Walter White Jr.',
    'Saul Goodman',
    'Gustavo Fring',
    'Mike Ehrmantraut',
    'Lydia Rodarte-Quayle',
    'Todd Alquist'
];

d3.select('#bb-list').selectAll('li')
    .data(data)
  .enter()
  .append('li')
	.text(function(d) {
		return d;
	});

// D3 Selections

d3.select("#sw-paragraphs").selectAll("p")
    .style("color", "red");

// Dynamic Properties

d3.select("#dx-paragraphs").selectAll("p")
    .style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    })
    .style("font-weight", function(d, i) {
        return i % 2 ? "bold" : "thin";
    });

// Enter & Exit

// Update…
var items = d3.select("#artist-list")
    .selectAll("li")
    .data(["Eminem", "Linkin Park", "Coldplay", "Maroon 5", "The Beatles"])
    .text(function(d) {
        return d + " !";
    });

// Enter…
items.enter().append("li")
    .text(function(d) {
        return d + " !";
    });

// Exit…
items.exit().remove();
