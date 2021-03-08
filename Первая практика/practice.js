		
function n1()
{	
	var chk1;
	chk1 = document.getElementById('chk1');
	
	if(chk1.checked)
	{
		alert('yeah boyyyy');
	}
	else
	{
		alert("oh noooo");
	}
}

function n2()
{	
	var rad1;
	rad1 = document.getElementsByName('rad1');
	
	for(let i = 1; i < rad1.length + 1; i++)
	{
		if(rad1[i - 1].checked)
		{
			alert('Chose ' + i);
		}
	}
}

function n3()
{	
	var vipad1_1 = document.getElementById('vipad1').selectedIndex;
	var vipad1_2 = document.getElementById('vipad1').options;
	
	alert('Chose ' + vipad1_2[vipad1_1].text );
}

function n4()
{	
	var step = document.getElementById('steper1');
	var p_to_s = document.getElementById('p_to_step1');
	
	p_to_s.innerHTML = step.value;
}

function n5_1()
{
	var rtr = document.getElementById('rtr').value;
	var rbr = document.getElementById('rbr').value;
	var rbl = document.getElementById('rbl').value;
	var rtl = document.getElementById('rtl').value;
	
	var tor = document.getElementById('tor');
	
	tor.style.borderRadius = rtl + '% ' + rtr + '% ' + rbr + '% ' + rbl + '%';
}
function n5_2()
{
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;
	
	tor.style.backgroundColor = 'rgb('+ red + ' ' + green + ' ' + blue + ' ' + ')';

}
var countOfFunn_51b = 0;
function n5_1b()
{
	if(countOfFunn_51b % 2 == 0){
		prtr.style.display = 'block';
		prbr.style.display = 'block';
		prtl.style.display = 'block';
		prbl.style.display = 'block';
	}
	else{	
		prtr.style.display = 'none';
		prbr.style.display = 'none';
		prtl.style.display = 'none';
		prbl.style.display = 'none';	
	}
	countOfFunn_51b = countOfFunn_51b + 1;
}
var countOfFunn_52b = 0;
function n5_2b()
{
	if(countOfFunn_52b % 2 == 0){
		pred.style.display = 'block';
		pgreen.style.display = 'block';
		pblue.style.display = 'block';
	}
	else{		
		pred.style.display = 'none';
		pgreen.style.display = 'none';
		pblue.style.display = 'none';
	}
	countOfFunn_52b = countOfFunn_52b + 1;
}

function n6()
{	
	var canvas1 = document.getElementById("canvas1");
	var ctx1 = canvas1.getContext('2d');
	
	var x = 20;
	var y = 20;
	var x2 = 25;
	var y2 = 25;
	function draw(){
	ctx1.fillStyle = "green";
	ctx1.fillRect(x,y,x2,y2);
	x++;
	y++;
	// x2++;
	// y2++;
	ctx1.clearRect(x,y,x2,y2);
	window.requestAnimationFrame(draw);
	}
	draw();
}

function n7()
{	
	var canvas42 = document.getElementById("canvas42");
	var ctx42 = canvas42.getContext('2d');
	
	function r_color()
	{
		var r = Math.floor(Math.random() * 207) + 50;
		var g = Math.floor(Math.random() * 207) + 50;
		var b = Math.floor(Math.random() * 207) + 50;
		var r_color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
		
		return r_color;	
	}

	function Ball(x, y, velX, velY, color, size)
	{
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
		this.color = color;
		this.size = size;
	};
	
	Ball.prototype.draw = function(){
		ctx42.beginPath();
		ctx42.fillStyle = this.color;
		ctx42.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx42.fill();
	}
	
	// let testBall = new Ball(20, 20, 0, 0, 'blue', 10);
	// testBall.draw();
	
	var balls = new Array(1);
	// var audios = new Array(7); 
	
	for (let i = 0; i < balls.length; i++)
	{
		var r_x = Math.floor(Math.random() * 979) + 11;
		var r_y = Math.floor(Math.random() * 579) + 11;
		var r_size = Math.floor(Math.random() * 3) + 8;
		var r_velX = Math.floor(Math.random() * 3) + 1;
		var r_velY = Math.floor(Math.random() * 3) + 1;
		// var r_velXY = Math.floor(Math.random() * 3) + 1;
		
		balls[i] = new Ball(r_x, r_y, r_velX, r_velY, r_color(), r_size);
		// audios[i] = new Audio('1.mp3');
	}
	
	// let yeahBall = new Ball(r_x, r_y, r_velXY, r_velXY, r_color(), r_size);
	
	var width = 1000;
	var height = 600;
	
	// var count_boom = 0;
	
	var audio1 = new Audio();
	audio1.preload = 'auto';
	audio1.src = '1.mp3';
	
	Ball.prototype.update = function() {
		if ((this.x + this.size) >= width){
			this.velX = -(this.velX);
			audio1.play();
			//count_boom++;
		}
		if ((this.x - this.size) <= 0){
			this.velX = -(this.velX);
			audio1.play();
			//count_boom++;
		}
		if ((this.y + this.size) >= height){
			this.velY = -(this.velY);
			audio1.play();
			//count_boom++;
		}
		if ((this.y - this.size) <= 0){
			this.velY = -(this.velY);
			audio1.play();
			//count_boom++;
		}
		
		this.x += this.velX;
		this.y += this.velY;
	}
	
	function loop()
	{
		ctx42.fillStyle = 'rgba(0, 0, 0, 0.25)';
		ctx42.fillRect(0, 0, width, height);
		
		for (let i = 0; i < balls.length; i++)
		{
			balls[i].draw();
			balls[i].update();
		}
		
		requestAnimationFrame(loop);
	}
	
	loop();
	
	var audio2 = new Audio();
	audio2.preload = 'auto';
	audio2.src = '2.mp3';
	audio2.play();

	// function n7_count()
	// {
		// alert('Количество столкновений со стенами: ' + n7());
	// }
}

function n8()
{
	let field = document.getElementById("field_counter");
	let value = document.getElementById("counter_value");
	
	let value_is = localStorage.getItem('value');
	if(value_is == null) value_is = 0;
	else value_is++;
	
	value.innerHTML = value_is;
	
	field.addEventListener('click', () =>{
		localStorage.setItem('value', value_is);
		value_is++;
		value.innerHTML = value_is;
	});

}

let arlr = [1, 2, 3, 4, 5];

const fnt = (arr, n) => {
	return arr.map(e => e*n);
}

console.log(fnt(arlr, 5));


























