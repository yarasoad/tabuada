function tabuada() //função do botao//
{
var num=parseInt (document.getElementById("num").value);
var resultado=document.getElementById('resposta');
var tabuada='';

for (var count = 1; count <=10; count ++)    //inicia a tabuada em 1 e vai até 10 entao o count=contador inicia em 1 , vai comparar se 1 é < ou = a 10, entao subsittui, fica no loop infinito ate chegar no 10//
{
    tabuada += num + "X" + count + "=" +     //montar todas as linhas (1x1,1x2) um embaixo do outro//
    num*count+ "<br/>";  //numero fixo que vai multiplicar o restante (2x1,2x2,2x3) o 2 é o numero fixo//

    resultado.innerHTML = tabuada;    
}
}