function nostarResudado(resudado,total){
    if(resudado == total){
        alert("voce acertou");
        
    }else{
        alert("voce errou");
    
    }

}

function calcularSoma(numero1,numero2){
    let  resudado = parseInt(prompt ('responda a conda?'));
    let  total = numero1 * numero2
 
    nostarResudado(resudado,total);
}

function numeros(){
    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;

    alert("quanto e : " + numero1 + " x " + numero2);

    calcularSoma(numero1 , numero2);
}

numeros();

