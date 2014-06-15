var player = 
{
	x: 780, 
	y: 200,
	width: 32,
	height: 32,
	speed: 5,
	slide: 0,
	maxSlides: 7,
	ticksPerFrame: 2,
	tick: 0,
	lastKey: false,
	img: new Image(),
	init: function()
	{
		this.img.src =  'assets/img/char/char.png';
	},
	draw: function()
	{
		canvas.drawImage(this.img, (this.slide * 37), 0, 37, 69, 780, 200, 37, 69);
	},
	tickInc: function()
	{
		if(this.tick >= this.ticksPerFrame){this.slide++; this.tick=0;}
		if(this.slide >= this.maxSlides){this.slide=0}
		this.tick++;
	},
	animate: function()
	{
		if (keydown.left) 
		{
			checkpos = ( Math.floor( ((this.x-780) * -1 ) / 40) ) - 1;
			console.log( world.worldArray[0][checkpos] );
			//this is really basic basic lame hit detection just sees if there is a block in the next grid pos. if there is one it should check to see if its overlapping or going to
			//if(world.worldArray[0][checkpos] == 0 || world.worldArray[0][checkpos] == undefined  ){
				this.x += this.speed;
				this.tickInc();
				this.lastKey = true;
			//}
			//console.log(this.x)
		}

		if (keydown.right) 
		{
			this.x -= this.speed;
			this.tickInc();
			this.lastKey =  true;
			//console.log(this.x)
		}

		if (keydown.up) 
		{
			this.y += this.speed;
			this.lastKey =  true;
		}

		if (keydown.down) 
		{
			this.y -= this.speed;
			this.lastKey = true;
		}	
	}
};