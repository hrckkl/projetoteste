var nota1 = prompt("Qual sua 1° nota?");
var nota2 = prompt("Qual sua 2° nota?");
var nota3 = prompt("Qual sua 3° nota");
var media = 7


nota1 = parseInt(nota1)

nota2 = parseInt(nota2)

nota3 = parseInt(nota3)

var mediaN = (nota1 + nota2 + nota3)/3
    console.log(mediaN)

if (mediaN >= media) {
  console.log("Aprovado")
} 
else if (mediaN < media && mediaN >= 4){
  console.log("Exame")
}
else {
  console.log("Reprovado")
}  

