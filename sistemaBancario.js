var i = 1
var usuario = "Nicolli"
var senha = "1425"
var verificacao = false
var login

function Login(login){
  do{ 
        usuario1 = prompt("Insira o nome de usuário")
        senha1 = prompt("Digite sua senha:")
      i++
       
      if (senha1 == senha && usuario1 == usuario){
            console.log("Login concluido")
            console.log(Bem vinda ${usuario})
            verificacao = true
          break;
          
     }if (usuario1 != usuario){
         console.log("login incorreto") 
         
        } if (senha1 != senha){
           console.log("Senha inválida, tente novamente!")
        }  
    if (i > 3){
      console.log("Sistema bloqueado")
    }}
     while (i <= 3)
}
  Login(login)
  
  var Sacar
  var Depositar
  var Transferir
  var Sair
  var exit
  var limite = 3
  var opcoes
  var opcoesu
  
  function escolha(opcoes){
opcoesu = prompt("Selecione uma opção: \n1-Depositar\n2-Sacar\n3-Transferir\n4-Sair")}
  escolha(opcoes)
  
   if(opcoesu == "sair"){
    exit = "sair"
  }
  
   if(opcoesu == "Depositar") {
       
  function deposito(Depositar){
   var Depositar = prompt("Digite o valor")
     console.log("Valor depositado!")
   } 
     deposito(Depositar) 
     escolha(opcoes)
 }

   if(opcoesu == "Sacar"){

  function saque(Sacar){
    for(var limite = 1; limite <= 3; limite++ ){
      var Sacar = prompt("Digite o valor")
   Sacar = parseInt(Sacar)
    if(Sacar >= 500){
      console.log("Saque não autorizado. Valor acima do permitido. Max.: R$500,00")
    } else {
     console.log("Saque concluído")
    } if(limite > 2 ){ 
      console.log ("Mais saques não podem ser efetuados.")}
      escolha(opcoes)}}
     saque(Sacar)  
 }

   if(opcoesu == "Transferir"){
  
  function transferencia(Transferir){
   var Transferir = prompt("Digite o valor")
   var recebidor = prompt("Para quem deseja transferir?")
     Transferir = parseInt(Transferir)
    
    if(Transferir >= 2000){
      console.log("Transferência não autorizada. Max.:R$2000,00")
    } else { 
     console.log(Transferência concluída. R$${Transferir} enviado para ${recebidor})
   }}
     transferencia(Transferir) 
     escolha(opcoes)
}
