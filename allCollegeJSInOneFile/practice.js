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