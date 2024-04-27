var i = 1
var senha = "123"
var usuario = "Nicolli"
var verificacao = false

    do{ 
        usuario1 = prompt("Insira o nome de usuário")
        senha1 = prompt("Digite sua senha:")
      
       
        if (senha1 == senha && usuario1 == usuario){
            console.log("Login concluido")
            console.log(`Bem vinda ${usuario}`)
            verificacao = true
          break;
          
        }if (usuario1 != usuario){
         console.log("login incorreto") 
         
        } if (senha1 != senha){
           console.log("Senha inválida, tente novamente!")
        }  
    } while (verificacao == false )
