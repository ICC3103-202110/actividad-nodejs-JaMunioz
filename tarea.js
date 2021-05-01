function F(a){
    if (a == 0){
        return 0;
    }
    if (a == 1){
        return 1;
    }
    if (a >= 1){
        return (F(a-1) + F(a-2));
    }
    if (a < 1){
        return -1; 
    } 
    return -2;
}

const readline = require('readline').createInterface({ //OPCION 1:
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Ingrese el numero que quiere evaluar en la secuencia de figonacchi: ', n => {
    if (n == -1){
        console.log(`No se puede hacer con numeros menores a 0.`);
    }
    else{
        console.log(`El resultado es: ${F(n)}`);
    }
    readline.close();
  });

  /*
  var prompt = require('prompt-sync')();//OPCION 2:
 
  var numero = prompt('Ingrese el numero que quiere evaluar en la secuencia de figonacchi: ');
  console.log(`El resultado es: ${F(numero)}`);



//console.log(F({name})); //uso de funciones

//lista.length --> Entrega el largo de una lista.
*/
