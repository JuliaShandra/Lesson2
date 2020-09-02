//1

// a = 1;
// b = 250;
// let sum = 0; 
// alert (`Вывести в консоль простые числа от ${a} до ${b} и их сумму `);
// for (a,b; a<=b; a++){
// 	console.log(a);
// 		if(a%2 === 0){
// 		sum = sum + a;}
// }
// console.log(sum);


//2

// alert ('Вывести ряд числе Фибоначчи');
// n = +prompt ('Кликните число', '');
// fibonacci = [0, 1]; 
// for (i=2; i<n; i++) {
//		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];}
// alert(fibonacci.slice(0,n));


//3

do {
	a = +prompt('Введите А', '');
}	while (isNaN(a) && a<1);

do {
	b = +prompt('Введите B', '');
}	while (isNaN(b) && b<=a);

alert ('A = '+a+' and B = '+b+'.');

do {
	step = +prompt('Введите шаг', '');
}	while (isNaN(step) && step>=b && step>=0);

console.log(a, b, step);

summ = 0;
for (; a<=b; a+=step) {
	console.log('step', a);
	console.log('.....');
}

for(j=1, factorial=1; j<=a; j++){
	factorial *= j;
}

summ +=factorial;

console.log(summ);
