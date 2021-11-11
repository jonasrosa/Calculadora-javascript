
function inserirNumero(numero){
    
var num=document.getElementById('operacao').innerHTML
 document.getElementById('operacao').innerHTML=num+numero
  
}

function limparOpreracao(){
    document.getElementById('operacao').innerHTML=""
    document.getElementById('resultado').innerHTML=""
}

function calculadora(){
    var operacao=document.getElementById('operacao').innerHTML
    if(operacao){
        document.getElementById('resultado').innerHTML=eval(operacao)
    }
}