// Programar el juego del "Número Mágico" en el que se define un número y el usuario trata de adivinarlo, si el número que ingresó el usuario es menor, imprimir la pista "El número mágico es mayor", si el número que ingresó el usuario es mayor, imprimir la pista "El número mágico es menor",

let numero=parseInt(window.prompt("dime tu numero"));


let aleatorio=Math.floor(Math.random()*100);
console.log(aleatorio);
while(numero!=aleatorio)
{
    if(numero<aleatorio)
    {
        alert("el numero magico es mayor");
    }
    else if(numero>aleatorio)
    {
        alert("el numero magico es menor");
    }
    else if(numero==aleatorio)
    {
        break;
    }
    
    numero=parseInt(window.prompt("dime tu numero de nuevo"));
    
    
    
    
    
    
}

alert("felicidades la pegaste al numero magico!!");
alert("juego finalizado");


