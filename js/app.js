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

d3.select('#bb-list')
	.selectAll('li')
	.data(data)
	.enter()
	.append('li')
	.text(function(d) {
		return d;
	});

// D3 Selections

d3.selectAll("#sw-paragraphs p").style("color", "red");
