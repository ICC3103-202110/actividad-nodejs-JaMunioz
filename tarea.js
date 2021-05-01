function F(a){ //Fibonacci sequence.
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


const readline = require('readline').createInterface({ //import for do inputs
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('\nType the number which you want evaluate in the '
  +' Fibonacci sequence: ', n => { //scanf, or input.
    if (F(n) == -1){
        console.log(`\nThe number can´t be under 0.`);
    }
    else{
        if (F(n) == -2){
            console.log(`\nYou must type integers, not strings.`);
        } 
        else{
            console.log(`\nThe result of Fibonacci is: ${F(n)}`);
        }
    }
    readline.close();
  });
