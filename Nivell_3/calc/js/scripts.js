var num1=0;
var num2=0;
var resultat=0;
var operador=('N');
var esborrar;
var Aux;

    function posar(canvi){
        Aux='';
        var digit=document.getElementById(canvi).id;
        
    
    if(num1==0 && operador==('N')){
        num1=digit
        operador=''
        document.getElementById('aparador').innerHTML=num1;

    }
    else if(operador ==('=') && num1>0 && resultat==0){
        borrar('bor')
        num1=digit
        document.getElementById('aparador').innerHTML=num1;
    }
    
    else if(resultat!==0){
                    
        if(num2==0){
            num2=digit
        }
        else{
            num2 += digit
        }
        document.getElementById('aparador').innerHTML=num2;
    }
    else if(resultat!==0 || resultat==0 && operador==('-')){
        if(num2==0){
            num2=digit
        }
        else{
            num2 += digit
        }
        document.getElementById('aparador').innerHTML=num2;
    }

    else{
       num1 += digit
       document.getElementById('aparador').innerHTML=num1;
    }
    }
    function borrar(que){
        var esborrar=document.getElementById(que).id;
            if(esborrar==('bor')){
                num1=0;
                num2=0;
                resultat =0
                operador =('N')
                document.getElementById('aparador').innerHTML=num1;
            }
            
            else{
                if(num1>0 && num2==0 && resultat==0){
                    num1=0;
                    document.getElementById('aparador').innerHTML=num1;
                }
                else{
                    num2=0;
                    document.getElementById('aparador').innerHTML=num2;
                }
            }
            
            
    }
    function sumar(){
        if(num2==('x')){
            num2=0
        }
        if(resultat==0 && operador!==('+')){
            resultat = parseFloat(num1)+ parseFloat(num2);            
        }
        else if(resultat>=0){
            if(operador==('-')){
                resultat=resultat-parseFloat(num2);
                }
            else if(operador==('+') || operador==('=')){
                num2=0;
            }
            else if(operador==('*')){
                if (num2==0){
                    num2=0
                }
                else{
                resultat=resultat*parseFloat(num2);
                }
            }
            else if(operador==('/')){
                if(num2==0){
                    num2=0;
                }
                else{
                resultat=resultat/num2;
                resultat=parseInt(resultat).toFixed(3);
                }
            }
            else{
                resultat =  resultat + parseFloat(num2);
            }
        }
        else{
                resultat =  resultat + parseFloat(num2);
        }
        
        operador= '+'
        document.getElementById('aparador').innerHTML=resultat;
        num2=0
        
    }
    function restar(){
        if(num2==('x')){
            num2=0;
        }
        else if(resultat==0 && operador!== ('-') && operador!==('=')) {
                resultat=num1 - parseFloat(num2);      
            }
        else if(operador== ('=')){
            num2=0
            operador=('-');
        }
        else if(resultat>=0){
            if(operador==('+')){
                resultat= parseFloat(resultat) + parseFloat(num2);
            }
            else if(operador==('*')){
                if(num2==0){
                    num2=0;
                }
                else{
                resultat=resultat*parseFloat(num2);
                }
            }
            else if(operador==('/')){
                if(num2==0){
                    num2=0
                }
                else{
                    resultat=resultat/num2;
                    resultat=parseFloat(resultat).toFixed(3);
                }
            }
            else{
            resultat = resultat-parseFloat(num2).toFixed(3);
            }
        }
        else{
            resultat = resultat - parseFloat(num2).toFixed(3); 
        }
        operador= '-';
        document.getElementById('aparador').innerHTML=resultat;
        num2=0;
    }
    function multiplicar(){
        if(num1>=0 && num2==0 && resultat==0){
            if(operador==('*')){
                num2=0
                operador=('*')
                // intentem arreglar  33*0 = 0 * (el numero es concatena al num1)
                
            }
            else{
            resultat=num1
            operador='*'
            }
        }
        else if(resultat>=0){
            if(num2==('x')){
                if(resultat==0){
                    borrar('bor');
                }
                
                else{
                    num2=0;
                    operador=('*')
                }
            }
            if(operador==('**')){
                if(num2>=0){
                    resultat= resultat*parseInt(num2)
                }
                else{
                    num2=0

                }
            }
            else if (operador==('+')){
                if(num2==0){
                    num2=0
                }
                else{
                    resultat= resultat + parseInt(num2);
                    
                }
                operador='*'
            }
            else if(operador==('-')){
                resultat=resultat-parseFloat(num2);
                operador='*'
                }
            else if(operador==('/')){
                if (num2==0){
                    num2=0;
                }
                else{
                resultat=resultat/num2;
                resultat=parseFloat(resultat);
                }
            operador='*'
            }
            else if(operador==('*') && num2==0){
                if(num2.length ==1){
                    resultat= resultat*parseFloat(num2).toFixed(3);
                }
                else{
                    num2=1;
                }
                operador='*'
            }
           
            else if(operador==('=')){
                if(num2=='x'){
                    operador='**'
                }
                else{

                    num2=0;
                   operador=('*')
                }
            }

            else{
                resultat=resultat*parseFloat(num2).toFixed(3);  
                operador='*'  
            }
        }
        else if(resultat<0){
            num2=0
            operador='*'
        }      
        else{
            resultat=resultat*parseFloat(num2).toFixed(3);  
            operador='*'
        }
        
        document.getElementById('aparador').innerHTML=resultat;
        num2=0
    }
    function dividir(){
        if(num2==('x')){
            num2=0;
        }
        else if(resultat==0 && operador!==('/')){
            resultat=num1;
        }
        else if(resultat<0){
            num2=0;
        }
        else if(resultat>=0){
            if(operador==('+')){
                if(num2==0){
                    num2=0
                }
                else{
                    resultat=resultat +parseInt(num2);
                }
            }
            else if(operador==('-')){
                resultat=resultat-parseFloat(num2);
            }
            else if(operador==('*')){
                if(num2==0){
                    num2=0;
                }
                else{
                resultat=resultat*parseFloat(num2).toFixed(3);
                }
            }
            else if(operador==('=')){
                num2=0;
            }
            else if(operador==('/')){
                if(num2==0){
                    if(num1==0 && resultat==0){
                        alert('Really? En veritat estan dividnt 0 per 0? Fes una operació amb més sentit sisplau');
                        borrar('bor');
                    }
                    else if(num1>0 && resultat>0){
                        num2=0;
                        
                    }
                    else{
                        alert('El resultat de l'+ "'" +'operació és infinit, tot numero divid per 0 és infinit');
                        borrar('bor');
                    }
                }
                else{
                    resultat=resultat/num2;
                    resultat=parseFloat(resultat).toFixed(3);
                }
            }
            else{
                resultat=resultat / num2
                resultat=parseFloat(resultat).toFixed(3);
                
            }
        }
        else{
            resultat=resultat / num2
            resultat=parseFloat(resultat).toFixed(3);
        }
        document.getElementById('aparador').innerHTML=resultat;
        operador=('/')
        num2=0;
        if(resultat==0){
        borrar('bor')
    }
        
    }
    function decimal(){
        if(num1>=0){
            if(num1%1 ==0 && Aux!=='si'){
                posar('.')
                Aux='si'
            }
            else if(num2%1 ==0 && resultat>0 && Aux!=='si'){
                posar('.')
                Aux='si'
            
            }
        }
        
       
        
        
    }
    function igual(){
        if(operador=='+'){
            resultat = parseFloat(resultat) + parseFloat(num2);
            operador= '='
            num2=0;
        }
        else if(operador=='-'){
            if(num1>=0 && num2==0 && resultat==0 ){
                resultat= num2-num1
            }
            resultat = resultat - parseFloat(num2);
            operador= '='
            num2=0
        }
        else if(operador==('*') || operador==('**')){
            if(num2==0){
                if(num2.length ==1){
                    resultat= resultat*parseFloat(num2);
                    
                }
                else{
                    num2=1;
                }
            }
            else{
                resultat = resultat *parseFloat(num2);
            }
            operador= '='
            num2= ('x');
        }
        else if(operador==('/')){
            if(num2==0){
                if(num1==0 && resultat==0){
                    alert('Really? En veritat estan dividnt 0 per 0? Fes una operació amb més sentit sisplau');
                }
                else{
                    alert('El resultat de l'+ "'" +'operació és infinit, tot numero divid per 0 és infinit');
                }
                borrar('bor')

            }
            else{
                resultat=resultat/num2;
                resultat= parseFloat(resultat);
                operador= '='
                num2=0;
            }
        }
        
        else{
            num2=0
        }

        if(resultat%1!==0){
            resultat=parseFloat(resultat).toFixed(3);
        }
        
    document.getElementById('aparador').innerHTML=resultat;
    if(resultat==0){
        borrar('bor')
    }
   
}
   

