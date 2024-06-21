#valor = 0

#def saldo():
# valor = 1000

#saldo()
#print(valor)
\\\\\
#valor = 0

#def saldo(valor):
 #  valor += 1000
 #  return valor

 #print(saldo(valor))

\\\\\\\

saldo = 0

def depositar(saldo):
   deposito = int(input("Digite o valor: "))
   saldo += deposito
   print(f'{deposito},00 reais depositado')

   return saldo

print(f'saldo de R${depositar(saldo)},00')
