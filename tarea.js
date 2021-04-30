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
}

lista = [100,2];
cond = 2;
if (cond == 1){
    console.log("Holaa"); //print cotidiano
}
if (cond == 2){
    console.log(F(6)); //uso de funciones
}
//lista.length --> Entrega el largo de una lista.

