function F(a){
    if (a == 0){
        return 0;
    }
    else if (a == 1){
        return 1;
    }
    else if (a >= 1){
        return (F(a-1) + F(a-2));
    }
    else if (a <= -1){
        return -1; 
    } 
    return -2;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('\nIngrese el numero que quiere evaluar en la secuencia de'
  +' figonacchi: ', n => {
    if (F(n) == -1){
        console.log(`\nNo se puede hacer con numeros menores a 0.`);
    }
    else{
        if (F(n) == -2){
            console.log(`\nDebe ingresar numeros.`);
        } 
        else{
            console.log(`\nEl resultado es: ${F(n)}`);
        }
    }
    readline.close();
  });
