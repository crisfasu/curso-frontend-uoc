var num1 = prompt('Escribe un numero del 1 al 50');

if (num1 < 1){
    alert ('El numero tiene que ser mayor que 1')
    var num1 = prompt('Escribe otro numero del 1 al 50')
} else if (num1 > 50){
    alert ('El numero tiene que ser menor que 50')
   var num1= prompt('Escribe otro numero del 1 al 50')
} 

var num2 = prompt('Escribe otro numero del 1 al 50');

if (num2 < 1){
    alert ('El numero tiene que ser mayor que 1')
    var num2 = prompt('Escribe otro numero del 1 al 50')
} else if (num2 > 50){
    alert ('El numero tiene que ser menor que 50')
   var num2= prompt('Escribe otro numero del 1 al 50')
} 


const result = parseInt(num1) + parseInt(num2);

document.write (' La suma es ' + result + "<br>");


function isPrime(n) {

    if (n<=1) return false;
    for (var i = 2; i <= n-1; i++)
        if (n % i == 0) return false;
    return true;
} 

if (isPrime(num1)) {
    document.write("El número "+num1+" es primo ");
} else { 
    document.write("El número "+num1+" no es primo ");
} 

if (isPrime(num2)) {
    document.write("y el número "+num2+" es primo" + "<br>");
} else { 
    document.write("y el número "+num2+" no es primo"+ "<br>");
} 

if(num1%2==0){
    document.write("El número "+num1+" es par ");
} else{ 
    document.write("El número "+num1+" es impar ");   
    }

 if(num2%2==0){
    document.write("y el número "+num2+" es par"+ "<br>");
    }else{
    document.write("y el número "+num2+" es impar"+ "<br>");
}


 
for (var i = num1; i < num2; i++) {
    if (i %2==0) {
        document.write(" " + i);
    }
}
 
for (var i = num1; i > num2; i--) {
    if (i % 2 != 0) {        
            document.write(" " + i);
    }
}




if(num1===num2){
    document.write("Rango: " + num1);
    }else{
    
}
