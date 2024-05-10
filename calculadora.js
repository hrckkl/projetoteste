var num1 = prompt("Digite o 1° n°:")
var num2 = prompt("Digite o 2° n°:")
var equação = prompt("Qual a equação?")
nume1 = parseInt(num1)
num2 = parseInt(num2)

switch(true){
  case equação == "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;    
  case equação == "-":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;  
 case equação == "x":
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;  
 case equação == "/":
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;  
}
