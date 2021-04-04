
let tel_men = document.getElementById('tel_men');
let up = document.getElementById('menu');

tel_men.addEventListener("click", function(evt){
	up.classList.add("show_men");
});

up.addEventListener("click", function(cls1){
	up.classList.remove("show_men");
});

var u = 0;
function movie1_1()
{
	document.u.src='img/1'+u+'.png';
	u++; if(u>4) u=0;
	setTimeout('movie1_1();',2000);
}

var i = 1;
function movie1_2()
{
	document.i.src='img/1'+i+'.png';
	i++; if(i>4) i=0;
	setTimeout('movie1_2();',2000);
}

var o = 2;
function movie1_3()
{
	document.o.src='img/1'+o+'.png';
	o++; if(o>4) o=0;
	setTimeout('movie1_3();',2000);
}

var j = 0;
function movie2_1()
{
	document.j.src='img/2'+j+'.png';
	j++; if(j>4) j=0;
	setTimeout('movie2_1();',2000);
}

var k = 1;
function movie2_2()
{
	document.k.src='img/2'+k+'.png';
	k++; if(k>4) k=0;
	setTimeout('movie2_2();',2000);
}

var l = 2;
function movie2_3()
{
	document.l.src='img/2'+l+'.png';
	l++; if(l>4) l=0;
	setTimeout('movie2_3();',2000);
}

const btn_win_open = document.getElementById('btn_win_open');
const btn_win_close = document.getElementById('btn_win_close');
const btn_win_send = document.getElementById('btn_win_send');
let wind = document.getElementById('wind');

btn_win_open.addEventListener("click", function(evt){
	wind.classList.add("show_win");
});

btn_win_send.addEventListener("click", function(cls1){
	wind.classList.remove("show_win");
});

btn_win_close.addEventListener("click", function(cls1){
	wind.classList.remove("show_win");
});

window.addEventListener("keydown", function (cls2) {
	if (cls2.keyCode === 27) {
		if (wind.classList.contains("show_win")) {
			wind.classList.remove("show_win");
		}
	}
});