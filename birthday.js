

setInterval(() => {
	let time = (new Date() - new Date(2002,10,5)) / (31557600000); // milliseconds per year
	document.getElementById("age").innerHTML = time.toString().substring(0, 12);
}, 50);


