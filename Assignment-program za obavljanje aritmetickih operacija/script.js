var broj1=parseInt(prompt('unesite prvi broj'));
var operacija=prompt('unesite operaciju');

var broj2=parseInt(prompt('unesite drugi broj'));


function calc(param1,param2,operacija){
  if(operacija === '+') {
        document.write('Rezultat je: ' + (param1 +param2))

    

 }else if(operacija === '-') {
    document.write('Rezultat : ' + (param1 -param2))
    
 }else if(operacija === '*') {
    document.write('Rezultat : ' + (param1 *param2))
     }else if(operacija === '/') {
        document.write('Rezultat : ' + (param1 /param2))
  
   }

  
 
}

calc(broj1,broj2,operacija)



