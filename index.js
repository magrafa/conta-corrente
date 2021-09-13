import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Ricardo",11122233309,837469234);
const cliente2 = new Cliente("Alice",88822233309,1221);


const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
contaCorrenteCliente1._saldo = 1000; 
console.log(contaCorrenteCliente1);


const deposito = contaCorrenteCliente1.depositar(500);
console.log("valor depositado:"+deposito);
contaCorrenteCliente1.depositar(0);
// const valorSacado = contaCorrenteCliente1.sacar(100);
// console.log("valor sacado:" +valorSacado);
// console.log(contaCorrenteCliente1);
const conta2 = new ContaCorrente(cliente2,1001);
conta2._saldo = 10000; 
console.log(conta2);

const deposito2 = conta2.depositar(100);
conta2.depositar(0);
console.log("valor depositado: "+deposito2);

const valorSacado2 = conta2.sacar(5000);
console.log("valor sacado: "+valorSacado2);
console.log(conta2);

let valor = 200
contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.transferir(valor,conta2);
console.log(conta2);

console.log("Numero de contas:",+ ContaCorrente.numContas);