function z1(){
	var m = +prompt("Введите число M: ");
	var n = +prompt("Введите число N: ");
	var sum = 0;
	if (m % 2 == 0){
	for(var i = m + 1; i <= n; i+=2){
			sum = sum + i;
			document.write("Числа: ", i, '<br>');
		}
	}
	else{
		for(var i = m; i <= n; i+=2){
			sum = sum + i;
			document.write("Числа: ", i, '<br>');
		}
	}
	document.write("Сумма чисел: ", sum, '<br>');
	document.log('Калорийность обеда');
}
function z3(){
	var x = Math.random();
	var r = +prompt("Введеите RandMax: ");
	
	document.write(parseInt(sd));
}