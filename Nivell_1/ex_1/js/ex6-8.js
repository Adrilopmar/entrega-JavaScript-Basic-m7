//exercici 6
var cotxe = ('Tinc un cotxe de color verd')
var cotxe_blau= cotxe.replace('verd', 'blau');
document.getElementById('frase2').innerHTML=(cotxe_blau);
var cutxu =cotxe.replace(/o/g, 'u');
document.getElementById('frase3').innerHTML=(cutxu);
//exercici 7
var i;
var objectes = ['taula', 'cadira','ordinador','llibreta'];
var stock;
for(i=0;i<objectes.length;i++){
    console.log("l'article " + objectes[i]+ "esta en la posició " + [i + 1])
    stock= "L'article "+objectes[i] + " esta a la posicićo "+ [i+1] + '<br>';
    document.getElementById('articles').innerHTML+= stock;
}

//calculadora ex-8
var signe;
var numero_x=0;
var numero_y=0;
var primer_total=0;
var primer_resultat= calculadora();
function calculadora(signe,numero_x,numero_y){
    if(signe== 'suma' || signe== '+'){
        primer_total= parseInt(numero_x) + parseInt(numero_y);
    }
    else if(signe=='resta' || signe== '-'){
        primer_total= numero_x - numero_y;

    }
    else if(signe=='multiplicació' || signe== '*'){
        primer_total=numero_x*  numero_y;
    }
    document.getElementById('primera_operacio').innerHTML="La suma de la operació és :" + primer_total;
}



var numero_1 = 0; 
var numero_2 =0;
var total=0;
var operador;
function segona_calculadora(){
    numero_1= document.getElementById('digit1').value;
    numero_2= document.getElementById('digit2').value;
    operador= document.getElementById('operacio').value;
    if(operador=='suma'){
        total= parseInt(numero_1) + parseInt(numero_2);
    }
    else if(operador=='resta'){
        total= numero_1 - numero_2;
    }
    else{
        total=numero_1 *numero_2;
    }
    document.getElementById('igual').value=total;

}







