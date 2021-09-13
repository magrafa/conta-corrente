import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    static numContas = 0;
    _cliente;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;;
        }
        
    }
    get cliente(){
        return this._cliente;
    }

    constructor(cliente,agencia){
        this.agencia=agencia;
        this.cliente=cliente;
        ContaCorrente.numContas += 1;
    }


    _saldo=0;
    
    sacar(valor){
        if(valor<0){
            valor=0;
        }   
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0 ){
            
            return;   
        }
        this._saldo += valor;
        return valor;
    }
    transferir(valor,contaCorrenteCliente){
        
        const valorSacado = this.sacar(valor);
        contaCorrenteCliente.depositar(valorSacado);
        
    }
    
};

