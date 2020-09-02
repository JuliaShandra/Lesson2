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

a = +prompt('Введите А', '');
b = +prompt('Введите B', '');
while(a >= b){
a = +prompt('Введите А', '');}
step = +prompt('Введите шаг', '');
for (a,b,step; a<b; a=a+step){
	console.log(a);
}

function factolial(a) {    /////?????????????????
	summ = 0;
	for (f=0; f<a; f+=1) {
		summ += factorial(getInputNumericValue(a[f]));
	}
	return summ;
	alert(sum);
}

// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). Посчитать сумму факториалов* чисел которые попадаются во время перебора.