$(function(){
	canvas = $("#main").get(0).getContext("2d");
	player.init();
	world.init();
	setInterval(function() {  update();  draw();}, 15);
	console.log()
});


function update() 
{
	player.animate();
}

function draw() {
	canvas.canvas.width  = window.innerWidth;
	canvas.canvas.height = window.innerHeight;
	canvas.clearRect(0, 0, 1000, 1000);
	player.draw();
	world.render();
	canvas.font="10px arial";
	canvas.fillStyle = "#000";
	//canvas.fillText(i, 100, 100);
	//i++;
	
}
